from django.urls import path
from . import views

app_name = 'complain_manager'

urlpatterns = [
    path('file', views.ComplainListCreateView.as_view(), name = 'complain')
]
