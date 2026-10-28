from django.contrib.auth import get_user_model

User = get_user_model()

user = {
    'firstname': "john",
    'lastname': "doe",
    'email':'example@gmail.com',
    'password':'pass929',
    
}
def run():
    User.objects.create_user(
        user['email'],
        first_name = user['firstname'],
        last_name = user['lastname'],
        password = user['password']
)