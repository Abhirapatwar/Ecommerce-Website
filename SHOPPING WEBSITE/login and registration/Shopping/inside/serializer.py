from rest_framework import serializers
from .models import Product,Orderplaced


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model= Product
        fields=['id','title','desc','category','add','price']

class OrderplacedSerializer(serializers.ModelSerializer):
    class Meta:
        model= Orderplaced
        fields=['id','customer','product','qty','status','getprice']  

    def create(self,validated_data):
        return Orderplaced.objects.create(**validated_data)  

        