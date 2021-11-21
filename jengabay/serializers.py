from django.db.models import fields
from rest_framework import serializers
from .models import *
from django.forms.models import model_to_dict

class CountySerializer(serializers.ModelSerializer):
    class Meta:
        model = County
        fields = "__all__"

class SubCountySerializer(serializers.ModelSerializer):
    county = CountySerializer(many=False)

    class Meta:
        model = SubCounty
        fields = "__all__"

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'password', 'email']

class SecureUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'email']

class SellerProfileSerializer(serializers.ModelSerializer):
    sub_county = SubCountySerializer(many=False)
    profile = UserSerializer(many=False)
    class Meta:
        model = Seller
        fields = "__all__"

    def create(self, validated_data):
        """creates new instances of county and sub_county if they don't exist
        and proceeds to create an instance of a seller"""
        
        subcounty_data = validated_data.pop("sub_county")
        county_data = subcounty_data.pop("county")
        user_data = validated_data.pop("profile")
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

        try:
            user = User.objects.get(username=user_data["username"])
        except:
            user = User.objects.create_user(**user_data)
        validated_data.update({"profile": user})

        return Seller.objects.create(**validated_data)


class SellerSerializer(serializers.ModelSerializer):
    sub_county = SubCountySerializer(many=False)
    profile = serializers.PrimaryKeyRelatedField(queryset=User.objects.all(),many=False)
    class Meta:
        model = Seller
        exclude = ["business_reg_no", "business_reg_doc", "registration_date"]

class BuyerSerializer(serializers.ModelSerializer):
    profile = SecureUserSerializer(many=False)

    class Meta:
        model = Buyer
        fields = "__all__"

class BuyerProfileSerializer(serializers.ModelSerializer):
    profile = UserSerializer(many=False)

    class Meta:
        model = Buyer
        fields = "__all__"

    def create(self, validated_data):
        """creates new instances of User if it doesn't exist
        and proceeds to create an instance of a Buyer"""

        user_data = validated_data.pop("profile")

        try:
            user = User.objects.get(username=user_data["username"])
        except:
            user = User.objects.create_user(**user_data)
        validated_data.update({"profile": user})

        return Buyer.objects.create(**validated_data)

class ItemViewSerializer(serializers.ModelSerializer):
    item_seller = SellerSerializer(many=False)
    class Meta:
        model = Item
        fields = "__all__"

class ItemCreateSerializer(serializers.ModelSerializer):
    item_seller = serializers.PrimaryKeyRelatedField(read_only=True, many=False)
    class Meta:
        model = Item
        fields = "__all__"


    def create(self, validated_data):
        validated_data.pop('item_seller', None)
        item_seller = Seller.objects.get(profile=self.context['request'].user)
        validated_data.update({'item_seller': item_seller})
        return Item.objects.create(**validated_data)

class ItemSerializer(serializers.ModelSerializer):
    item_seller = serializers.PrimaryKeyRelatedField(queryset=Seller.objects.all(), many=False)
    class Meta:
        model = Item
        fields = "__all__"

class TransactionSerializer(serializers.ModelSerializer):
    payer = serializers.PrimaryKeyRelatedField(read_only=True)
    recipient = serializers.PrimaryKeyRelatedField(queryset=Seller.objects.all())

    class Meta:
        model = Transaction
        fields = "__all__"

class OrderSerializer(serializers.ModelSerializer):
    payment_transaction = TransactionSerializer(many=False)
    class Meta:
        model = Order
        fields = "__all__"

    def create(self, validated_data):
        """creates a new instances of a Transaction if it doesn't exist
        and proceeds to create an instance of an Order"""

        order_items = validated_data.pop("ordered_items")
        transaction_data = validated_data.pop("payment_transaction")
        transaction_data.pop("payer", None)
        payer = Buyer.objects.get(profile=self.context['request'].user)
        transaction_data.update({"payer": payer})
        transaction = Transaction.objects.create(**transaction_data)
        validated_data.update({"payment_transaction": transaction})
        order = Order.objects.create(**validated_data)
        order.ordered_items.set(order_items)
        order.save()
        return order