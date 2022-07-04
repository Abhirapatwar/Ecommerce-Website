import json
from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
from .serializer import ProductSerializer, OrderplacedSerializer
from .models import Product, Orderplaced
from rest_framework.generics import ListAPIView, CreateAPIView, DestroyAPIView
from rest_framework.parsers import JSONParser
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.models import User


class Productget(ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


class Orderplaceg(ListAPIView):
    queryset = Orderplaced.objects.all()
    serializer_class = OrderplacedSerializer


@csrf_exempt
def Orderplacedget(request):
    pythondata = JSONParser().parse(request)
    # print("----------------------------------------------")
    print("the recieved data is")
    print(pythondata)
    print(pythondata['customer'])
    x = User.objects.get(username=(pythondata['customer']))
    print("value of x ", x)
    Deserialize = OrderplacedSerializer(data=pythondata)
    if Deserialize.is_valid():
        print("in")
        Deserialize.save()
        return HttpResponse(json.dumps({
            "formdata": {"msg": "True"},
        }),
            content_type="application/json"
        )

    return HttpResponse(json.dumps({
        "formdata": {"msg": "False"},
    }),
        content_type="application/json"
    )


@csrf_exempt
def Orderplacedcart(request):
    pythondata = JSONParser().parse(request)
    print(pythondata['customer'])
    x = Orderplaced.objects.filter(customer=(pythondata['customer']))
    print("value of x ", x)
    if x is not None:
        serialize = OrderplacedSerializer(x, many=True)
        return JsonResponse(serialize.data, safe=False)
        
    return HttpResponse(json.dumps({
        "formdata": {"msg": "False"},
    }),
        content_type="application/json"
    )

def Orderplacedelete(request,pk):
    todelete=Orderplaced.objects.get(id=pk)
    serialize=OrderplacedSerializer(data=todelete)
    serialize.delete()
    return HttpResponse(json.dumps({
            "formdata": {"msg": "True"},
        }),
            content_type="application/json"
        )

