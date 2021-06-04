from django.urls import path
from django.urls import *
from . import views

urlpatterns = [
    path('', views.about, name='about'),
    path('login', views.login, name='login'),
    path('phonebook', views.phonebook, name='phonebook'),
    path('registration', views.registration, name='registration'),
    path('view', views.view, name='view'),
    path('edit', views.edit, name='edit'),
    path('sort', views.sort, name='sort'),
    path('reverse', views.reverse, name='reverse'),
]