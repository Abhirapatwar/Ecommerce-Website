from django.urls import path
from . import views

urlpatterns = [
    # path('', views.login,name='login'),
    path('productlist/', views.Productget.as_view()),
    path('ordercreate/', views.Orderplacedget),
    path('orderget/', views.Orderplaceg.as_view()),
    path('cartget/', views.Orderplacedcart),
    path('delete/<int:pk>', views.Orderplacedelete.as_view()),

]