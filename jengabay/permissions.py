from rest_framework import permissions
from . models import Buyer, Seller

class IsItemSeller(permissions.BasePermission):
    """
    Custom permission to only allow the owner of an item to edit it.
    """

    def has_object_permission(self, request, view, obj):
        # Read permissions are allowed to any request,
        # so we'll always allow GET, HEAD or OPTIONS requests.
        if request.method in permissions.SAFE_METHODS:
            return True

        # Write permissions are only allowed to the owner of the object.
        return obj.item_seller.profile == request.user


class IsAccountOwner(permissions.BasePermission):
    """
    Custom permission to only allow the owner of an item to read and edit it.
    """

    def has_object_permission(self, request, view, obj):
        # Read and Write permissions are only allowed to the owner of the object.
        if obj.profile == request.user:
            return True

class IsABuyer(permissions.BasePermission):
    """
    Custom permission to only allow a registered and logged in buyer to create an order.
    """

    def has_permission(self, request, veiw):
        #Create permissions are only allowed to buyers.
        if Buyer.objects.filter(profile=request.user).exists():
            return True

class HasSellerPermission(permissions.BasePermission):
    """
    Custom permission to only allow an authorized seller to view their orders.
    """

    def has_object_permission(self, request, view, obj):
        # Read and Write permissions are only allowed to the owner of the object.
        if obj.payment_transaction.recipient.profile == request.user:
            return True

class HasBuyerOrderPermission(permissions.BasePermission):
    """
    Custom permission to only allow an authorized Buyer to view their orders.
    """

    def has_object_permission(self, request, view, obj):
        # Read and Write permissions are only allowed to the owner of the object.
        if obj.payment_transaction.sender.profile == request.user:
            return True

class HasTransactionViewPermission(permissions.BasePermission):
    """
    Custom permission to only allow an authorized seller to view their transactions.
    """

    def has_object_permission(self, request, view, obj):
        # Read and Write permissions are only allowed to the owner of the object.
        if obj.recipient.profile == request.user:
            return True


class HasAddItemPermission(permissions.BasePermission):
    """
    Custom permission to only allow a registered and logged in buyer to create an order.
    """

    def has_permission(self, request, veiw):
        #Create permissions are only allowed to buyers.
        if Seller.objects.filter(profile=request.user).exists():
            return True