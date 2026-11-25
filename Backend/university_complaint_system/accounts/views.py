from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.decorators import api_view
from rest_framework import generics, status
from rest_framework.exceptions import ValidationError
from rest_framework.permissions import AllowAny, IsAuthenticated, IsAdminUser
from rest_framework.response import Response
from rest_framework.authentication import SessionAuthentication
from rest_framework_simplejwt.authentication import JWTAuthentication
from .serializers import RegistrationSerializer, ProfileSerializer
from . import models


def home(request):
    return HttpResponse("it is accounts homepage")


# class RegistrationView(generics.GenericAPIView):
#     serializer_class = RegistrationSerializer
#     permission_classes = [AllowAny]

#     def get(self, request):
#         response_message = {
# e)

#     def post(self, request):
#         serializer = self.get_serializer(data = request.data)
#         serializer.is_valid(raise_exception = True)
#         serializer.save()
#         return Response(serializer.data, status=status.HTTP_201_CREATED)

#     def put(self):
#         pass


class RegistrationView(generics.CreateAPIView):
    serializer_class = RegistrationSerializer
    permission_classes = [AllowAny]
    authentication_classes = []


class ProfileView(generics.CreateAPIView):
    serializer_class = ProfileSerializer
    permission_classes = [IsAdminUser]
    authentication_classes = [SessionAuthentication, JWTAuthentication]
    queryset = models.Profile.objects.none()  # only to keep the Browsable API happy

    def perform_create(self, serializer):
        if models.Profile.objects.filter(user=self.request.user).exists():
            raise ValidationError("Profile already exists for this user.")
        serializer.save(user=self.request.user)
