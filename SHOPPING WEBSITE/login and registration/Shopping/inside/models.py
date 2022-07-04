
import django
from django.db import models
from django.contrib.auth.models import User
from django.forms import IntegerField



# class Customer(models.Model):
#     customer=models.ForeignKey(User,on_delete=models.CASCADE)
#     city=models.CharField(max_length=50,null=True)
#     zipcode=models.PositiveIntegerField()

#     def __str__(self):
#         return str(self.customer)

class Product(models.Model):
    title=models.CharField(max_length=50,unique=True)
    desc=models.CharField(max_length=150)
    category=models.CharField(max_length=50)
    add=models.CharField(max_length=200,null=True)
    price=models.PositiveIntegerField()

    def __str__(self):
        return self.title


class Orderplaced(models.Model):
    customer=models.ForeignKey(User,to_field='username',on_delete=models.CASCADE)
    product=models.ForeignKey(Product, to_field='title',on_delete=models.CASCADE)
    qty=models.PositiveIntegerField()
    # orderdate=models.DateField(default=django.utils.timezone.now)
    status=models.CharField(max_length=50,null=True)

    def getprice(self):
        return self.product.price

    # def totalprice(self):
    #     return sum(Decimal(item['getprice'])*item['qty'] for item in self.product.value())  








