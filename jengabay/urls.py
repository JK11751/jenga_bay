from django.urls import path
from . import views

urlpatterns = [
    path('sellerapiview', views.SellerListCreateView.as_view(), name='sellerapiview'),
    path('itemapiview', views.ItemListCreateView.as_view(), name='itemapiview'),
    path('orderapiview', views.OrderListCreateView.as_view(), name='orderapiview'),
]