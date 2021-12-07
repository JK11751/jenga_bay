from django.urls import path
from . import views

urlpatterns = [
    #api endpoint for creating a seller
    path('create_seller_account', views.SellerCreateView.as_view(), name='createseller'),

    #api for viewing all registered sellers
    path('sellers/', views.SellerListView.as_view(), name='sellers'),

    #api endpoint for viewing a specific seller
    path('sellers/<str:pk>', views.SpecificSellerView.as_view(), name='seller'),

    #api endpoint for viewing, updating and deleting a specific seller
    path('sellers/<str:pk>/profile', views.SpecificSellerProfileView.as_view(), name='seller_profile'),

    #api endpoint for viewing all items
    path('items', views.AllItemsListView.as_view(), name='items'),

    #api endpoint for viewing a specific item in the home page
    path('items/<int:pk>', views.SpecificItemView.as_view(), name='item_view'),

    #api endpoint for viewing items belonging to a specific seller
    path('sellers/<str:pk>/items', views.SpecificSellerItemsView.as_view(),name='seller_items'),

    #api endpoint for creating items
    path('sellers/<str:pk>/items/add_item', views.ItemCreateView.as_view(),name='add_item'),

    #api endpoint for viewing and updating a specific item in a specific seller page
    path('sellers/<str:seller_id>/items/<int:pk>', views.SpecificSellerSpecificItemView.as_view(), name='seller_specific_item'),

    #api endpoint for creating a buyer account
    path('create_buyer', views.BuyerCreateView().as_view(), name='create_buyer'),

    #api for updating a buyer
    path('buyers/<str:pk>/profile', views.SpecificBuyerProfileView.as_view(), name='buyer_profile'),

    #api for viewing a specific buyer
    path('buyers/<str:pk>', views.SpecificBuyerView.as_view(), name='buyer_profile'),

    #api for creating an order
    path('submit_order', views.OrderCreateView.as_view(), name='create_order'),

    #api for listing seller orders
    path('sellers/<str:pk>/orders', views.OrderListView.as_view(), name='orders'),

    #api for retreiving, updating and deleting a specific order
    path('sellers/<str:seller_id>/orders/<str:pk>/edit', views.SpecificSellerSpecificOrderView.as_view(), name='orders'),

    #api for viewing a specific order
    path('sellers/<str:seller_id>/orders/<str:pk>', views.SpecificOrderView.as_view(), name='orders'),

    #api for viewing a specific order
    path('buyers/<str:pk>/orders', views.SpecificBuyerOrderView.as_view(), name='buyer_orders'),

    path('login', views.CustomAuthToken.as_view(), name='login')
]