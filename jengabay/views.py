from django.shortcuts import render
from .serializers import *
from rest_framework.generics import ListCreateAPIView
from .models import *

# Create your views here.
class SellerListCreateView(ListCreateAPIView):
    serializer_class = SellerSerializer
    queryset = Seller.objects.all()
