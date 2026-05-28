import os
import sys

# Point to the Django project root (backend/)
BASE_DIR = os.path.dirname(__file__)
sys.path.append(os.path.join(BASE_DIR, "../backend"))

# Django settings module (CONFIRMED correct for your project)
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "backend.settings")

# Load Django WSGI application
from django.core.wsgi import get_wsgi_application

app = get_wsgi_application()