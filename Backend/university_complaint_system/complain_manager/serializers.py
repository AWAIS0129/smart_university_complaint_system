from .models import Complain
from rest_framework import serializers

class ComplainSerializer(serializers.ModelSerializer):
    class Meta:
        model = Complain
        fields = [
            "subject",
            "date_of_event",
            "accused",
            "accused_role",
            "accused_department",
            "issue",
            "attachments",
            
        ]