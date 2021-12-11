from django.shortcuts import render
from .serializers import *
from rest_framework.generics import CreateAPIView, ListAPIView, RetrieveUpdateDestroyAPIView
from .models import *
from rest_framework import filters
from django_filters.rest_framework import DjangoFilterBackend
from . permissions import *
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token
from rest_framework.response import Response

class SellerCreateView(CreateAPIView):
    """api for creating new sellers"""

    serializer_class = SellerProfileSerializer
    queryset = Seller.objects.all()

class SellerListView(ListAPIView):
    """api for listing all sellers"""

    serializer_class = SellerSerializer
    queryset = Seller.objects.all().filter(profile__is_active=True)


class SpecificSellerProfileView(RetrieveUpdateDestroyAPIView):
    """api used to get, update and delete a specific seller
    must be logged in as a seller"""
    permission_classes = [permissions.IsAuthenticated, IsAccountOwner]
    serializer_class = SellerProfileUpdateSerializer
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
    """api used to get, update and delete a specific item in a specific seller page
    must be logged in as the item seller"""
    serializer_class = ItemSerializer
    queryset = Item.objects.all()
    permission_classes = [permissions.IsAuthenticated, IsItemSeller]

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

class SpecificSellerItemsView(ListAPIView):
    """api for listing items belonging to a specific seller"""

    serializer_class = ItemSerializer
    filter_backends = [filters.SearchFilter, DjangoFilterBackend,]
    search_fields = ['item_name', 'item_description', 'category',]
    filterset_fields = ['category',]


    def get_queryset(self):
        return Item.objects.all().filter(item_seller=self.kwargs['pk'])


class ItemCreateView(CreateAPIView):
    """api for creating items via a seller account
    must be logged in as a seller"""

    permission_classes = [permissions.IsAuthenticated, HasAddItemPermission]
    serializer_class = ItemCreateSerializer
    queryset = Item.objects.all()

class BuyerCreateView(CreateAPIView):
    """api for creating new buyers"""

    serializer_class = BuyerProfileSerializer
    queryset = Buyer.objects.all()

class BuyerListView(ListAPIView):
    """api for listing all buyers"""

    serializer_class = BuyerSerializer
    queryset = Buyer.objects.all().filter(profile__is_active=True)


class SpecificBuyerProfileView(RetrieveUpdateDestroyAPIView):
    """api used to get, update and delete a specific Buyer
    must be logged in as a buyer"""
    permission_classes = [permissions.IsAuthenticated, IsAccountOwner]
    serializer_class = BuyerProfileUpdateSerializer
    queryset = Buyer.objects.all()

class SpecificBuyerView(ListAPIView):
    """api used to get a specific Buyer"""

    serializer_class = BuyerSerializer

    def get_queryset(self):
        return Seller.objects.all().filter(id=self.kwargs['pk'])

class OrderCreateView(CreateAPIView):
    """api for creating a new order
    must be logged in as a buyer"""
    permission_classes = [permissions.IsAuthenticated, IsABuyer]
    serializer_class = OrderSerializer
    queryset = Order.objects.all()

class OrderListView(ListAPIView):
    """api for listing all orders for a specific seller
    must be logged in as a seller"""
    permission_classes = [permissions.IsAuthenticated, HasSellerPermission]
    serializer_class = OrderSerializer

    def get_queryset(self):
        return Order.objects.all().filter(payment_transaction__recipient=self.kwargs['pk'])


class SpecificSellerSpecificOrderView(RetrieveUpdateDestroyAPIView):
    """api used to get, update and delete a specific Order
    must be logged in as a seller"""
    permission_classes = [permissions.IsAuthenticated, HasSellerPermission]
    serializer_class = OrderSerializer
    queryset = Order.objects.all()

class SpecificOrderView(ListAPIView):
    """api used to view a specific order by a seller or a buyer
    must be logged in as the seller or buyer involved in the order"""
    permission_classes = [permissions.IsAuthenticated, HasSellerPermission or HasBuyerOrderPermission]

    serializer_class = OrderSerializer

    def get_queryset(self):
        return Order.objects.all().filter(id=self.kwargs['pk'])

class SpecificBuyerOrderView(ListAPIView):
    """api used to view all orders made by a buyer
    must be logged in as the buyer involved in the orders"""
    permission_classes = [permissions.IsAuthenticated, HasBuyerOrderPermission]

    serializer_class = OrderSerializer

    def get_queryset(self):
        return Order.objects.all().filter(payment_transaction__payer=self.kwargs['pk'])


class TransactionCreateView(CreateAPIView):
    """api for creating a new Transaction"""
    permission_classes = [permissions.IsAuthenticated, IsABuyer]
    serializer_class = TransactionSerializer
    queryset = Transaction.objects.all()

class TransactionListView(ListAPIView):
    """this api allows a specific seller to view all the transactions they are involved in"""
    permission_classes = [permissions.IsAuthenticated, HasTransactionViewPermission]
    serializer_class = TransactionSerializer

    def get_queryset(self):
        return Transaction.objects.all().filter(recipient=self.kwargs['pk'])


class SpecificSellerSpecificTransactionView(RetrieveUpdateDestroyAPIView):
    """api used to get, update and delete a specific Transaction"""
    permission_classes = [permissions.IsAuthenticated, HasTransactionViewPermission]
    serializer_class = TransactionSerializer
    queryset = Transaction.objects.all()

class SpecificTransactionView(ListAPIView):
    """This api allows a buyer and a seller to view a specific transaction involving both of them"""
    permission_classes = [permissions.IsAuthenticated, HasTransactionViewPermission, IsABuyer]

    serializer_class = TransactionSerializer

    def get_queryset(self):
        return Transaction.objects.all().filter(id=self.kwargs['pk'])

class CustomAuthToken(ObtainAuthToken):
    """A Custom authentication class that creates an expiring authentication token
    for a user who logs in"""

    def post(self, request, *args, **kwargs):
        """An override of the post method that takes a login request, verifies
        the login credentials and creates an expiring token once the user is verified"""
        
        serializer = self.serializer_class(data=request.data,
                                       context={'request': request})
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        token, created = Token.objects.get_or_create(user=user)
        if not created:
            # update the created time of the token to keep it valid
            token.created = datetime.utcnow()
            token.save()

        if Seller.objects.filter(profile=user).exists():
            account_id = Seller.objects.get(profile=user).id
            session_status = 'seller'
        elif Buyer.objects.filter(profile=user).exists():
            account_id = Seller.objects.get(profile=user).id
            session_status = 'buyer'
        else:
            account_id = None
            session_status = None

        return Response({
            'token': token.key,
            'user_id': user.pk,
            'email': user.email,
            'session_status': session_status,
            'account_id': account_id
        })