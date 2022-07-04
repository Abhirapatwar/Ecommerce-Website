from django.contrib import admin
from .models import Product,Orderplaced

# class userpermission:
#     def has_add_permission(self,request):
#         return True

#     def has_view_permission(self,request,obj=None):
#         return True

#     def has_change_permission(self,request,obj=None):
#         return True

#     def has_delete_permission(self,request,obj=None):
#         return True

# @admin.register(Customer)
# class CustomerAdmin(admin.ModelAdmin):
#     list_display = ['id','customer','city','zipcode']


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ['id','title','desc','category','add','price']
    

@admin.register(Orderplaced)
class OrderplacedAdmin(admin.ModelAdmin):
    list_display = ['id','customer','product','qty','status','getprice']



