from django.urls import path
from . import views

urlpatterns = [
    #api endpoint for creating a seller and viewing all registered sellers
    path('sellers', views.SellerListCreateView.as_view(), name='sellers'),

    #api endpoint for viewing a specific seller
    path('sellers/<str:pk>', views.SpecificSellerView.as_view(), name='seller'),

    #api endpoint for viewing, updating and deleting a specific seller
    path('sellers/<str:pk>/profile', views.SpecificSellerProfileView.as_view(), name='seller_profile'),

    #api endpoint for viewing all items
    path('items', views.AllItemsListView.as_view(), name='items'),

    #api endpoint for viewing a specific item in the home page
    path('items/<int:pk>', views.SpecificItemView.as_view(), name='item_view'),

    #api endpoint for viewing items belonging to a specific category in the home page
    path('items/category/<str:category>', views.HomePageItemsCategoryView.as_view(), name='home_category'),

    #api endpoint for viewing and creating items belonging to a specific seller
    path('sellers/<str:pk>/items', views.SpecificSellerItemsView.as_view(),name='seller_items'),

    #api endpoint for viewing a specific item in a specific seller page
    path('sellers/<str:seller_id>/items/<int:pk>', views.SpecificSellerSpecificItemView.as_view(), name='seller_specific_item'),

    #api endpoint for viewing items belonging to a specific category in a seller page
    path('sellers/<str:pk>/items/category/<str:category>', views.SellerPageItemsCategoryView.as_view(), name='seller_items_category'),

    #order api end point
    path('order', views.OrderListCreateView.as_view(), name='order'),
]