from django import forms


class Login(forms.Form):
    Email_sign = forms.EmailField(label='login-email', widget=forms.EmailInput())
    Password = forms.CharField(label='login-password', widget=forms.PasswordInput())


class Register(forms.Form):
    Name = forms.CharField(widget=forms.TextInput())
    Email = forms.EmailField(widget=forms.EmailInput())
    Password = forms.CharField(widget=forms.PasswordInput())
    gender = forms.CharField(widget=forms.RadioSelect())
    birthday = forms.DateField(widget=forms.DateInput())


class AddContact(forms.Form):
    Surname = forms.CharField(widget=forms.TextInput())
    Phone = forms.CharField(widget=forms.TextInput())


class EditContact(forms.Form):
    Id = forms.IntegerField(widget=forms.NumberInput())
    Surname = forms.CharField(widget=forms.TextInput())
    Phone = forms.CharField(widget=forms.TextInput())
