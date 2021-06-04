from django.shortcuts import render
from . forms import *
from django.http import HttpResponseRedirect, HttpResponse
from . models import *

users = [0]


def about(request):
    return render(request, 'Title/about.html')


def login(request):
    error = ""
    form = Login(request.POST)
    if request.method == "POST":
        email = request.POST['email']
        password = request.POST['password']
        obj = list(User.objects.filter(user_email=email))
        if len(obj) == 1:
            tmp = User.objects.get(user_email=email)
            if tmp.user_password == password:
                users.insert(0, email)
                return HttpResponseRedirect('/phonebook')
            else:
                error = "Wrong password"
        elif len(obj) > 1:
            error = "Account was exist"
            return HttpResponseRedirect('/', {'form': form, 'error': error})
        else:
            error = "Wrong email"
            return render(request, 'Title/login.html', {'form': form, 'error': error})
    return render(request, 'Title/login.html', {'form': form, 'error': error})


def registration(request):
    error = ""
    form = Register(request.POST)
    if request.method == "POST":
        Email = request.POST['email']
        Name = request.POST['name']
        Password = request.POST['password']
        gender = request.POST['sex']
        birthday = request.POST['date']
        a = list(User.objects.filter(user_email=Email))
        if len(a) == 0:
            usr = User(user_name=Name, user_email=Email, user_password=Password, user_gender=gender, user_birthday=birthday)
            usr.save()
            return HttpResponseRedirect('/login')
        else:
            error = "User with this email is"
            return render(request, 'Title/registration.html', {'form': form, 'error': error})
    return render(request, 'Title/registration.html', {'form': form, 'error': error})


def view(request):
    if users[0] != 0:
        fields = User.objects.get(user_email=users[0])
    else:
        fields = {
            'user_name': "NO Name",
            'user_email': "NO email",
            'user_password': "1111",
            'user_gender': "man-woman",
            'user_birthday': "00-00-0000",
        }
    return render(request, 'Title/view.html', {'fields': fields})


def phonebook(request):
    forms = []
    if users[0] != 0:
        fields = User.objects.all()[0].id
        user = User.objects.all()[0]
        forms = list(Contact.objects.filter(company=fields))
        if request.method == "POST":
            surname = request.POST['surname']
            phone = request.POST['phone']
            contact = Contact(company=user, firstname=surname, tel=phone)
            contact.save()
            forms = list(Contact.objects.filter(company=fields))

    return render(request, 'Title/phonebook.html', {'forms': forms})

def edit (request):
    forms = []
    if users[0] != 0:
        fields = User.objects.all()[0].id
        user = User.objects.all()[0]
        forms = list(Contact.objects.filter(company=fields))
        if request.method == "GET":
            id = request.GET['id']
            name = request.GET['name']
            tel = request.GET['tel']
            contact = Contact.objects.get(id=id)
            contact.firstname = name
            contact.tel = tel
            contact.save()
            forms = list(Contact.objects.filter(company=fields))
    return render(request, 'Title/phonebook.html', {'forms': forms})


def sort(request):
    forms = []
    if users[0] != 0:
        fields = User.objects.all()[0].id
        user = User.objects.all()[0]
        forms = list(Contact.objects.filter(company=fields))
        if request.method == "GET":
            forms = list(Contact.objects.order_by("firstname"))
    return render(request, 'Title/phonebook.html', {'forms': forms})

def reverse(request):
    forms = []
    if users[0] != 0:
        fields = User.objects.all()[0].id
        user = User.objects.all()[0]
        forms = list(Contact.objects.filter(company=fields))
        if request.method == "GET":
            forms = list(Contact.objects.order_by("-firstname"))
    return render(request, 'Title/phonebook.html', {'forms': forms})