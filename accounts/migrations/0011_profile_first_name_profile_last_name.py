# Generated by Django 4.2 on 2023-04-23 15:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("accounts", "0010_customuser_date_created"),
    ]

    operations = [
        migrations.AddField(
            model_name="profile",
            name="first_name",
            field=models.CharField(blank=True, max_length=60, null=True),
        ),
        migrations.AddField(
            model_name="profile",
            name="last_name",
            field=models.CharField(blank=True, max_length=60, null=True),
        ),
    ]
