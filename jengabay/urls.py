from django.urls import path
from . import views

urlpatterns = [
    #api endpoint for creating a seller and viewing all registered sellers
    path('sellers', views.SellerListCreateView.as_view(), name='sellers'),

    #api endpoint for creating a seller and viewing all registered sellers
    path('sellers/<str:pk>', views.SpecificSellerView.as_view(), name='sellers'),

    #api end point for viewing all items
    path('items', views.AllItemsView.as_view(), name='items_view'),

    #api endpoint for creating and viewing all items with detailed information
    path('', views.AllItemsListCreateView.as_view(), name='item_create'),

    #api endpoint for viewing a specific item
    path('items/<str:pk>', views.SpecificItemView.as_view(), name='item_view'),

    #api endpoint for viewing items belonging to a specific seller
    path('sellers/<str:pk>/items', views.SpecificSellerItemsView.as_view(),name='seller_items'),

    #order api end point
    path('order', views.OrderListCreateView.as_view(), name='order'),
]