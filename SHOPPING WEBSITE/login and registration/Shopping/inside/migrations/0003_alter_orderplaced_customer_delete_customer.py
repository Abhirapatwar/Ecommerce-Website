# Generated by Django 4.0.4 on 2022-06-12 14:07

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('inside', '0002_remove_product_image_product_add_alter_product_price'),
    ]

    operations = [
        migrations.AlterField(
            model_name='orderplaced',
            name='customer',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
        migrations.DeleteModel(
            name='Customer',
        ),
    ]
