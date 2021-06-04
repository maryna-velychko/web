# Generated by Django 3.2.4 on 2021-06-03 22:11

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('user_name', models.CharField(max_length=30, verbose_name='name')),
                ('user_email', models.EmailField(max_length=30, verbose_name='email')),
                ('user_password', models.CharField(max_length=25, verbose_name='password')),
                ('user_birthday', models.DateField(verbose_name='birthday')),
                ('user_gender', models.CharField(max_length=25, verbose_name='sex')),
            ],
        ),
        migrations.CreateModel(
            name='Contact',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('firstname', models.CharField(max_length=30)),
                ('tel', models.IntegerField()),
                ('company', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='app.user')),
            ],
        ),
    ]