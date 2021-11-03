from django.shortcuts import render
from .serializers import *
from rest_framework.generics import ListAPIView, ListCreateAPIView
from .models import *
from rest_framework.parsers import MultiPartParser, FormParser

# Create your views here.
class SellerListCreateView(ListCreateAPIView):
    serializer_class = SellerSerializer
    queryset = Seller.objects.all()

class ItemListView(ListAPIView):
    serializer_class = ItemViewSerializer
    queryset = Item.objects.all()

class ItemListCreateView(ListCreateAPIView):
    serializer_class = ItemSerializer
    queryset = Item.objects.all()

class OrderListCreateView(ListCreateAPIView):
    serializer_class = OrderSerializer
    queryset = Order.objects.all()