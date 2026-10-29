from django.db import models
from django.conf import settings

# Create your models here.

User = settings.AUTH_USER_MODEL
class Department(models.Model):
    name = models.CharField(max_length=50, null=False)
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return f"{self.name} department"
    
class Role(models.Model):
    designation = models.CharField(max_length = 50)
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return f"{self.designation}"