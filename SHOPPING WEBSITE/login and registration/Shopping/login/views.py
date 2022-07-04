from email import message
from email.headerregistry import Group
from tokenize import group
from django.http import HttpResponse
from django.shortcuts import redirect, render
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from django.contrib.auth import login as auth_login
from django.views.decorators.csrf import csrf_exempt
from .serializers import UserSerializer
from rest_framework.parsers import JSONParser
from rest_framework.authentication import BasicAuthentication
from rest_framework.permissions import IsAuthenticated
import json
from rest_framework.decorators import api_view


def login(request):
    return render(request, 'login.html')


@csrf_exempt
def signup(request):
    pythondata = JSONParser().parse(request)
    Deserialize = UserSerializer(data=pythondata)
    if Deserialize.is_valid():
        Deserialize.save()
        return HttpResponse(json.dumps({
            "formdata": {"msg": "Added Successfully"},
        }),
            content_type="application/json"
        )
    return HttpResponse(json.dumps({
        "formdata": {"msg": "Unsuccessfully"},
    }),
        content_type="application/json"
    )

@api_view(['GET','POST'])
@csrf_exempt
def signin(request):
    pythondata = JSONParser().parse(request)
    username = pythondata['username']
    password = pythondata['password']
    user = authenticate(username=username, password=password)
    print(user)
    if user is not None:
        user.is_staff = True
        user.save()
        
        # group=Group.objects.get(name='Editors')
        # user.groups.add(group)

        auth_login(request, user)

        return HttpResponse(json.dumps({
            "formdata": {"msg": "True"},
        }),
            content_type="application/json"
        )
    else:
        return HttpResponse(json.dumps({
            "formdata": {"msg": "False"},
        }),
            content_type="application/json"
        )


def signout(request):
    return render(request, 'signout.html')
