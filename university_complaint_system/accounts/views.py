from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.decorators import api_view
from rest_framework import generics, status
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from .serializers import RegisterationSerializer

def home(request):
    return HttpResponse('it is accounts homepage')


class RegistrationView(generics.GenericAPIView):
    serializer_class = RegisterationSerializer
    permission_classes = [AllowAny]
    
    def get(self, request):
        response_message = {
            "messsage":"Send a POST with username, email and password to register."
        }
        return Response(response_message)
    
    def post(self, request):
        serializer = self.get_serializer(data = request.data)
        serializer.is_valid(raise_exception = True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)

