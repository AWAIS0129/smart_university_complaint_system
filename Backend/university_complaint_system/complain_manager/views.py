from django.shortcuts import render
from rest_framework.generics import ListCreateAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import SessionAuthentication
from rest_framework_simplejwt.authentication import JWTAuthentication
from .serializers import ComplainSerializer
from .models import Complain

# Create your views here.


class ComplainListCreateView(ListCreateAPIView):
    permission_classes = [IsAuthenticated]
    authentication_classes = [SessionAuthentication, JWTAuthentication]
    serializer_class = ComplainSerializer

    def get_queryset(self):
        return Complain.objects.filter(complainant=self.request.user)

    def perform_create(self, serializer):
        serializer.save(
            complainant=self.request.user,
            complainant_department=self.request.user.profile.department,
            complainant_role=self.request.user.profile.role,
        )
