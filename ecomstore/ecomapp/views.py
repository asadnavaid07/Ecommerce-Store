from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view,permission_classes
from .products import product
from .models import Products
from .serializers import ProductSerializer,UserSerializer,UserSerializerWithToken
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.permissions import IsAuthenticated,IsAdminUser
from django.contrib.auth.models import User
from django.contrib.auth.hashers import make_password
from rest_framework import status
from django.views.decorators.csrf import csrf_exempt


@api_view(['GET'])
def getRoutes(request):
    return Response("Hello Asad")

@api_view(['GET'])
def getProducts(request):
    products=Products.objects.all()
    serializer=ProductSerializer(products,many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getProduct(request,pk):
    product=Products.objects.get(id=pk)
    serializer=ProductSerializer(product,many=False)
    return Response(serializer.data)
    

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self,attrs):

        data=super().validate(attrs)
        serializer=UserSerializerWithToken(self.user).data
        for k,v in serializer.items():
            data[k]=v
        return data
    
class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class=MyTokenObtainPairSerializer


    
@api_view(['GET'])  
@permission_classes([IsAuthenticated])
def getUserProfile(request):
    user=request.user
    serializer=UserSerializer(user,many=False)
    return Response(serializer.data)

@api_view(['GET'])  
@permission_classes([IsAdminUser])
def getUser(request):
    users=User.objects.all()
    serializer=UserSerializer(users,many=True)
    return Response(serializer.data)


@csrf_exempt 
@api_view(['POST'])  
def registerUser(request):
    
    data=request.data
    if User.objects.filter(email=data['email']).exists():
        return Response({"details": "User with this email already exists"}, status=status.HTTP_400_BAD_REQUEST)

    user=User.objects.create(first_name=data['fname'],last_name=data['lname'],username=data['email'],email=data['email'],password=make_password(data['password']))
    serialize=UserSerializerWithToken(user,many=False)
    return Response(serialize.data)

    

       
        # message={'details':'User Already Exist'}
        # return Response(message, status=status.HTTP_400_BAD_REQUEST)

