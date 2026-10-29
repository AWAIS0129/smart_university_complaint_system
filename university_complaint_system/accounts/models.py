from django.db import models
from .custom_user_manager import CustomUserModelManager
from django.conf import settings
from django.contrib.auth.models import AbstractUser
from departments.models import Department, Role




# Using custom user model to sign-in with email instead of Username
class CustomUser(AbstractUser):
    username = None
    email = models.EmailField(unique=True)
    
    USERNAME_FIELD = "email"             
    REQUIRED_FIELDS = [] 
    
    objects = CustomUserModelManager()
    
    def __str__(self):
        return f"{self.first_name} {self.last_name}".strip() or self.email  
    
User = settings.AUTH_USER_MODEL 

class Profile(models.Model):  
    
    
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name="profile")
    country = models.CharField(max_length=50, default='Pakistan')
    city = models.CharField(max_length=50)
    contact = models.CharField(max_length=20, blank=True)
    is_student = models.BooleanField(default=False)
    department = models.ForeignKey(Department, models.PROTECT,  null=True , blank=True)
    role= models.ForeignKey(Role, on_delete=models.SET_NULL, null=True, blank=True, related_name="profiles")
    
    def __str__(self):
        return f"Profile of {self.user}"

        
        
    


