from rest_framework import serializers
from django.contrib.auth import get_user_model
from .models import Profile

User = get_user_model()
class RegisterationSerializer(serializers.ModelSerializer):
    password = serializers.CharField(
        write_only = True,
        max_length = 20,
        style = {"input_type":"password"}
    )
    
    class Meta:
        model = User
        fields = ["id", "first_name","last_name","email","password"]
        
    def create(self, validated_data):
        return User.objects.create_user(**validated_data)