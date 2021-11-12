from django.shortcuts import render
from rest_framework.views import APIView
from .serializers import *
from rest_framework.generics import ListAPIView, ListCreateAPIView, RetrieveUpdateDestroyAPIView
from .models import *

# Create your views here.
class SellerListCreateView(ListCreateAPIView):
    """View class for creating new sellers and listing all registered sellers data"""

    serializer_class = SellerSerializer
    queryset = Seller.objects.all().filter(is_registered=True)

class SpecificSellerView(RetrieveUpdateDestroyAPIView):
    """View class used to get, update and delete a specific seller"""

    serializer_class = SellerSerializer
    queryset = Seller.objects.all()

class SpecificItemView(RetrieveUpdateDestroyAPIView):
    """View class used to get, update or delete an item"""

    serializer_class = ItemSerializer
    queryset = Item.objects.all()

class AllItemsView(ListAPIView):
    """View class used to list all items in the database exclusive
    of the foreign key fields data"""

    serializer_class = ItemSerializer
    queryset = Item.objects.all()

class AllItemsListCreateView(ListCreateAPIView):
    """View class used to create and list all items in the database inclusive
    of the foreign key fields data"""

    serializer_class = ItemViewSerializer
    queryset = Item.objects.all()

class SpecificSellerItemsView(ListAPIView):
    """View class for listing all items belonging to a specific seller"""
    
    serializer_class = ItemSerializer
    def get_queryset(self):
        return Item.objects.all().filter(item_seller=self.kwargs['pk'])

class OrderListCreateView(ListCreateAPIView):
    serializer_class = OrderSerializer
    queryset = Order.objects.all()