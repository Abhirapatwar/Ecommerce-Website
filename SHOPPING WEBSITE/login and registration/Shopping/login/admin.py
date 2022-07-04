from django.contrib import admin
from django.contrib.auth.models import User

def has_add_permission(self,request):
    return True

def has_view_permission(self,request,obj=None):
    return True

def has_change_permission(self,request,obj=None):
    return True

def has_delete_permission(self,request,obj=None):
    return True

