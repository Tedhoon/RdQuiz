# Generated by Django 2.2.7 on 2020-06-22 09:06

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('quizbackend', '0002_auto_20200622_1751'),
    ]

    operations = [
        migrations.AddField(
            model_name='quiz',
            name='category',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='quizbackend.Category', verbose_name='카테고리'),
        ),
    ]
