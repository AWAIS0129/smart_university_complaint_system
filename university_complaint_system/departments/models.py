from django.db import models
from django.conf import settings

# Create your models here.

User = settings.AUTH_USER_MODEL
class Department(models.Model):
    name = models.CharField(max_length=50, null=False)
    created_at = models.DateTimeField(auto_now_add=True)
    
    
class Role(models.Model):
    designation = models.CharField(max_length = 50)
    user = models.ForeignKey(User, on_delete=models.PROTECT, related_name='roles')
    created_at = models.DateTimeField(auto_now_add=True)