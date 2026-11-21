from django.contrib.auth import get_user_model
from django.db import IntegrityError, transaction
from django.test import TestCase

from accounts.models import Profile
from departments.models import Department, Role

User = get_user_model()


class CustomUserTests(TestCase):

    @classmethod
    def setUpTestData(cls):
        # Runs once for the whole class (faster than setUp)
        cls.user = User.objects.create_user(
            email="john@example.com",
            password="pass929",
            first_name="John",
            last_name="Doe",
        )

    def test_create_user(self):
        self.assertEqual(self.user.email, "john@example.com")
        self.assertTrue(self.user.check_password("pass929"))
        self.assertNotEqual(self.user.password, "pass929")  # hashed
        self.assertTrue(self.user.is_active)
        self.assertFalse(self.user.is_staff)
        self.assertFalse(self.user.is_superuser)

    def test_username_field_is_email(self):
        self.assertEqual(User.USERNAME_FIELD, "email")
        self.assertIsNone(User.username)

    def test_email_is_normalized(self):
        u = User.objects.create_user(email="a@EXAMPLE.COM", password="x12345678")
        self.assertEqual(u.email, "a@example.com")

    def test_create_user_without_email_raises(self):
        with self.assertRaises(ValueError):
            User.objects.create_user(email="", password="x12345678")

    def test_duplicate_email_raises(self):
        with self.assertRaises(IntegrityError):
            with transaction.atomic():  # keeps the test transaction usable
                User.objects.create_user(email="john@example.com", password="y12345678")

    def test_create_superuser(self):
        admin = User.objects.create_superuser(email="admin@example.com", password="admin12345")
        self.assertTrue(admin.is_staff)
        self.assertTrue(admin.is_superuser)

    def test_str(self):
        self.assertEqual(str(self.user), "John Doe")
        u = User.objects.create_user(email="noname@example.com", password="x12345678")
        self.assertEqual(str(u), "noname@example.com")


# class ProfileTests(TestCase):

#     @classmethod
#     def setUpTestData(cls):
#         cls.user = User.objects.create_user(email="p@example.com", password="x12345678")
#         dept = Department.objects.create(name="Computer Science")
#         cls.role = Role.objects.create(designation="Lecturer", department=dept)

#     def test_defaults(self):
#         profile = Profile.objects.create(user=self.user, city="Islamabad")
#         self.assertEqual(profile.country, "Pakistan")
#         self.assertFalse(profile.is_student)
#         self.assertIsNone(profile.role)

#     def test_profile_with_role(self):
#         profile = Profile.objects.create(user=self.user, city="Lahore", role=self.role)
#         self.assertEqual(self.user.profile, profile)
#         self.assertEqual(self.role.profiles.count(), 1)

#     def test_one_profile_per_user(self):
#         Profile.objects.create(user=self.user, city="Lahore")
#         with self.assertRaises(IntegrityError):
#             with transaction.atomic():
#                 Profile.objects.create(user=self.user, city="Karachi")

#     def test_deleting_user_deletes_profile(self):
#         Profile.objects.create(user=self.user, city="Lahore")
#         self.user.delete()
#         self.assertEqual(Profile.objects.count(), 0)