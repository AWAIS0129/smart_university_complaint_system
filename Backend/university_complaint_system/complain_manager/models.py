from django.db import models
from accounts.models import CustomUser, Profile
from departments.models import Department, Role

# Create your models here.


class Complain(models.Model):
    subject = models.CharField(max_length=200)
    date_of_event = models.DateTimeField(blank=True, null=True)
    complainant = models.ForeignKey(
        CustomUser, models.CASCADE, related_name="Complaint_filed_by"
    )
    complainant_department = models.ForeignKey(
        Department, on_delete=models.CASCADE, related_name="complaint_from", null=True
    )
    complainant_role = models.ForeignKey(
        Role, on_delete=models.CASCADE, related_name="complainant_from", null=True
    )
    accused = models.ForeignKey(
        CustomUser, on_delete=models.CASCADE, related_name="complaint_against"
    )
    accused_role = models.ForeignKey(
        Role, on_delete=models.CASCADE, related_name="complaint_against"
    )
    accused_department = models.ForeignKey(
        Department, on_delete=models.CASCADE, related_name="complaint_against"
    )
    issue = models.TextField(max_length=1000, blank=False)
    attachments = models.FileField(upload_to="complaints/%Y/%m/", blank=True)
    submitted_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["-submitted_at"]

    def __str__(self):
        return f"{self.complainant} complains about {self.subject}"


class ComplainCount(models.Model):
    complainant = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    remaining = models.IntegerField(default=5)
