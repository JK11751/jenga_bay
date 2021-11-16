from django.shortcuts import render
from rest_framework.views import APIView
from .serializers import *
from rest_framework.generics import ListAPIView, ListCreateAPIView, RetrieveUpdateDestroyAPIView
from .models import *

# Create your views here.
class SellerListCreateView(ListCreateAPIView):
    """api for creating new sellers and listing all registered sellers data"""

    serializer_class = SellerSerializer
    queryset = Seller.objects.all().filter(is_registered=True)

class SpecificSellerProfileView(RetrieveUpdateDestroyAPIView):
    """api used to get, update and delete a specific seller"""

    serializer_class = SellerSerializer
    queryset = Seller.objects.all()

class SpecificSellerView(ListAPIView):
    """api used to get a specific seller"""

    serializer_class = SellerSerializer

    def get_queryset(self):
        return Seller.objects.all().filter(id=self.kwargs['pk'])

class SpecificItemView(ListAPIView):
    """api used to get a specific item"""

    serializer_class = ItemViewSerializer
    
    def get_queryset(self):
        return Item.objects.all().filter(id=self.kwargs['pk'])

class SpecificSellerSpecificItemView(RetrieveUpdateDestroyAPIView):
    """api used to get, update and delete a specific item in a specific seller page"""

    serializer_class = ItemSerializer
    queryset = Item.objects.all()

class AllItemsListView(ListAPIView):
    """api listing all items in the database"""

    serializer_class = ItemViewSerializer
    queryset = Item.objects.all()

class SpecificSellerItemsView(ListCreateAPIView):
    """api for listing and creating items belonging to a specific seller"""
    
    serializer_class = ItemSerializer
    def get_queryset(self):
        return Item.objects.all().filter(item_seller=self.kwargs['pk'])

class HomePageItemsCategoryView(ListAPIView):
    """api listing all items belonging to a certain category in the home page"""
    
    serializer_class = ItemViewSerializer
    def get_queryset(self):
        return Item.objects.all().filter(category=self.kwargs['category'])

class SellerPageItemsCategoryView(ListAPIView):
    """api listing all items belonging to a certain category in a specific seller page"""
    
    serializer_class = ItemViewSerializer
    def get_queryset(self):
        return Item.objects.all().filter(category=self.kwargs['category']).filter(item_seller=self.kwargs['pk'])

class OrderListCreateView(ListCreateAPIView):
    serializer_class = OrderSerializer
    queryset = Order.objects.all()