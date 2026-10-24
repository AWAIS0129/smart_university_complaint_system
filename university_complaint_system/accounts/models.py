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
    user_id = models.OneToOneField(User, on_delete=models.CASCADE, help_text="This field tells the id of he user whose profile is this")
    country = models.CharField(max_length=50, default='Pakistan')
    city = models.CharField(max_length=50)
    contact = models.CharField(max_length=20, null = True, default="Not Given")
    is_student = models.BooleanField(default=True)
    # department_id = models.OneToOneField()
        
        
    


