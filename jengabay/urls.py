from django.urls import path
from . import views

urlpatterns = [
    #seller api view end point
    path('sellers', views.SellerListCreateView.as_view(), name='sellers'),
    #itmes api end point
    path('', views.ItemListView.as_view(), name='itemsview'),
    path('itemcreate', views.ItemListCreateView.as_view(), name='itemcreate'),

    #oredr api end point
    path('order', views.OrderListCreateView.as_view(), name='order'),
]