from django.db import models


class User(models.Model):
    id = models.IntegerField(primary_key=True)
    user_name = models.CharField("name", max_length=30)
    user_email = models.EmailField("email", max_length=30)
    user_password = models.CharField("password", max_length=25)
    user_birthday = models.DateField("birthday")
    user_gender = models.CharField("sex", max_length=25)

    def __str__(self):
        return f'{self.user_name, self.user_email, self.user_birthday.__str__(),self.user_gender}'


class Contact(models.Model):
    company = models.ForeignKey(User, on_delete=models.CASCADE)
    firstname = models.CharField(max_length=30)
    tel = models.CharField(max_length=30)

    def __str__(self):
        return f'{self.firstname, self.tel, self.company}'
