from django.contrib import admin
from django.urls import path
from . import views
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
)

urlpatterns = [
    path('', views.getRoutes, name="getRoutes"),
    path('products', views.getProducts, name="getProducts"),
    path('product/<str:pk>', views.getProduct, name="getProduct"),
     path('users/login/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('users/profile/',views.getUserProfile,name="getUserProfiles"),
    path('users/',views.getUser,name="getUsers"),
    path('users/register/',views.registerUser,name="register"),
]
