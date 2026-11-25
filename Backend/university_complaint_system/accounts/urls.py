from django.urls import path
from accounts import views
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

app_name = "accounts"
urlpatterns = [
    path("register", views.RegistrationView.as_view(), name="register"),
    path("auth/login", TokenObtainPairView.as_view(), name="token_obtain_pair"),
    path("auth/login/refresh", TokenRefreshView.as_view(), name="token_refresh"),
    path("profile", views.ProfileView.as_view(), name="profile"),
]
