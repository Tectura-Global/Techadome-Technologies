import ssl
import json
import smtplib
from django.conf import settings
from django.http import JsonResponse
from email.mime.text import MIMEText
from django.core.mail import send_mail
from django.middleware.csrf import get_token
from email.mime.multipart import MIMEMultipart
from django.views.decorators.http import require_POST
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
def csrf(request):
    token = get_token(request)
    return JsonResponse({"csrfToken": token})



def contact(request):
    try:
        data = json.loads(request.body)
        first_name = data.get('first_name')
        last_name = data.get('last_name')
        email = data.get('email')
        phone = data.get('phone')
        company = data.get('company')
        service = data.get('service')
        message = data.get('message')

        msg = MIMEMultipart()
        msg['Subject'] = f"New Contact Form: {service}"
        msg['From'] = settings.EMAIL_HOST_USER
        msg['To'] = 'info@techadometechnologies.com'

        body = f"""Name: {first_name} {last_name}
Email: {email}
Phone: {phone}
Company: {company}
Service: {service}

Message:
{message}"""

        msg.attach(MIMEText(body, 'plain'))

        context = ssl.create_default_context()
        context.check_hostname = False
        context.verify_mode = ssl.CERT_NONE

        with smtplib.SMTP_SSL(settings.EMAIL_HOST, 465, context=context) as server:
            server.login(settings.EMAIL_HOST_USER, settings.EMAIL_HOST_PASSWORD)
            server.sendmail(settings.EMAIL_HOST_USER, 'info@techadometechnologies.com', msg.as_string())

        return JsonResponse({'success': True})

    except Exception as e:
        return JsonResponse({'success': False, 'error': str(e)}, status=500)