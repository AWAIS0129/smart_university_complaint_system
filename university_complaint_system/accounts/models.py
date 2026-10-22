from django.db import models
from .custom_user_manager import CustomUserModelManager
from django.contrib.auth.models import AbstractUser
from django.contrib.auth import get_user_model




# Using custom user model to sign-in with email instead of Username
class CustomUser(AbstractUser):
    username = None
    email = models.EmailField(unique=True)
    
    USERNAME_FIELD = "email"             
    REQUIRED_FIELDS = [] 
    
    objects = CustomUserModelManager()
    
    def __str__(self):
        return f"{self.first_name} {self.last_name}".strip() or self.email  
    
User = get_user_model()

class Profile(models.Model):  
    pass


