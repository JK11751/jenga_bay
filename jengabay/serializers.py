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

    def create(self, validated_data):
        subcounty_data = validated_data.pop("sub_county")
        county_data = subcounty_data.pop("county")
        try:
            county = County.objects.get(county_name=county_data["county_name"])
        except:
            county = County.objects.create(**county_data)
        subcounty_data.update({"county": county})

        try:
            sub_county = SubCounty.objects.get(subcounty_name=subcounty_data["subcounty_name"])
        except:
            sub_county = SubCounty.objects.create(**subcounty_data)
        validated_data.update({"sub_county": sub_county})

        return Seller.objects.create(**validated_data)


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