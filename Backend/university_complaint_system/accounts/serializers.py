from rest_framework import serializers
from django.contrib.auth import get_user_model
from .models import Profile
from django.db import transaction

User = get_user_model()
class RegistrationSerializer(serializers.ModelSerializer):
    password = serializers.CharField(
        write_only = True,
        max_length = 20,
        style = {"input_type":"password"}
    )
    
    class Meta:
        model = User
        fields = ["id", "first_name","last_name","email","password","country","city","contact"]
        
    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        Profile.objects.create(
            user = user,
            is_student = True,
            department = None,
            role = None
            )
            
        return user
    
    

class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = [
            "is_student",
            "department",
            "role"
        ]
        read_only_fields = ["user"]