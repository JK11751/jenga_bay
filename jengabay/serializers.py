from rest_framework import serializers
from .models import *

class CountySerializer(serializers.ModelSerializer):
    class Meta:
        model = County
        fields = "__all__"

class SubCountySerializer(serializers.ModelSerializer):
    county = CountySerializer(many=False)

    class Meta:
        model = SubCounty
        fields = "__all__"

class SellerSerializer(serializers.ModelSerializer):
    sub_county = SubCountySerializer(many=False)

    class Meta:
        model = Seller
        fields = "__all__"

class BuyerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Buyer
        fields = "__all__"

class ItemSerializer(serializers.ModelSerializer):
    item_seller = SellerSerializer(many=False)
    class Meta:
        model = Item
        fields = "__all__"

class OrderSerializer(serializers.ModelSerializer):
    ordered_items = ItemSerializer(many=True)
    customer = BuyerSerializer(many=False)
    class Meta:
        model = Order
        fields = "__all__"