# Generated by Django 4.0.4 on 2022-06-12 15:16

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('inside', '0004_orderplaced_status'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='orderplaced',
            name='orderdate',
        ),
    ]