from django.shortcuts import render
from rest_framework.views import APIView
from .serializers import *
from rest_framework.generics import ListAPIView, ListCreateAPIView, RetrieveUpdateDestroyAPIView
from .models import *
from rest_framework import filters
from django_filters.rest_framework import DjangoFilterBackend

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
    filter_backends = [filters.SearchFilter, DjangoFilterBackend,]
    search_fields = [
        'item_seller__business_name', 'item_seller__sub_county__subcounty_name',
        'item_seller__sub_county__county__county_name', 'item_seller__local_area_name',
        'item_seller__town', 'item_seller__building', 'item_seller__street',
        'item_name', 'item_description', 'category',]
        
    filterset_fields = ['category',]

class SpecificSellerItemsView(ListCreateAPIView):
    """api for listing and creating items belonging to a specific seller"""

    serializer_class = ItemSerializer
    filter_backends = [filters.SearchFilter, DjangoFilterBackend,]
    search_fields = ['item_name', 'item_description', 'category',]
    filterset_fields = ['category',]


    def get_queryset(self):
        return Item.objects.all().filter(item_seller=self.kwargs['pk'])

class OrderListCreateView(ListCreateAPIView):
    serializer_class = OrderSerializer
    queryset = Order.objects.all()