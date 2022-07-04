from rest_framework import serializers
from django.contrib.auth.models import User
# from rest_framework.authtoken.models import Token
# from .models import Book

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'password']

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user    