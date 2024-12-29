"""
URL configuration for backend project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from api.views import CreateUserView
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/user/register/', CreateUserView.as_view(), name="register"), #register user
    path('api/token/', TokenObtainPairView.as_view(), name='get_token'), #handles obtaining access tokens.
    path('api/token/refresh/', TokenRefreshView.as_view(), name='refresh'), #handles refreshing access tokens
    path('api/auth/', include('rest_framework.urls')), #prebuilt authentication URLs provided by Django REST framework
    path('api/', include("api.urls")),
]

# The as_view function is a method typically used in class-based views to convert a class into a view function that can be used in URL routing. 
# It stores the original class on the view function, allowing for reverse URL lookups and breadcrumb generation. 
# If the class has a queryset attribute that is a Django QuerySet, it raises a RuntimeError if the queryset is evaluated directly, to prevent caching and reuse between requests. 
# The function then calls the superclass's as_view method, attaches the class and initialization arguments to the view, and returns the view with CSRF exemption for non-session-based authentication.