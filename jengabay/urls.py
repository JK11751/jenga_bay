from django.urls import path
from . import views

urlpatterns = [
    path('sellerapiview', views.SellerListCreateView.as_view(), name='sellerapiview'),
]