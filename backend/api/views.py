import json
from django.conf import settings
from django.http import JsonResponse
from django.core.mail import send_mail
from django.middleware.csrf import get_token
from django.views.decorators.http import require_POST
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
def csrf(request):
    token = get_token(request)
    return JsonResponse({"csrfToken": token})


@require_POST
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

        send_mail(
            subject=f"New Contact Form: {service}",
            message=f"""
Name: {first_name} {last_name}

Email: {email}

Phone: {phone}

Company: {company}

Service: {service}

Message:
{message}
""",
            from_email=settings.DEFAULT_FROM_EMAIL,
            recipient_list=['your@email.com'],
            fail_silently=False,
        )

        return JsonResponse({
            'success': True
        })

    except Exception as e:

        return JsonResponse({
            'success': False,
            'error': str(e)
        }, status=500)