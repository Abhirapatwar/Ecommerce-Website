# Generated by Django 4.0.4 on 2022-06-12 10:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('inside', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='product',
            name='image',
        ),
        migrations.AddField(
            model_name='product',
            name='add',
            field=models.CharField(max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='product',
            name='price',
            field=models.PositiveIntegerField(),
        ),
    ]
