from . import views
from django.urls import path

urlpatterns = [
    path("csrf/", views.csrf),
    path('contact/', views.contact),
]