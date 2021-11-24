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

class UpdateUserSerializer(serializers.ModelSerializer):
    """A serializer class to bypass username validation during updates
    a code to prevent creation of more than one similar user names has been implemented in the update
    methods of the serializer classes where User is nested"""
    class Meta:
        model = User
        fields = ['username', 'email']
        extra_kwargs = {
            'username': {'validators': []},
        }

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

class SellerProfileUpdateSerializer(serializers.ModelSerializer):
    profile = UpdateUserSerializer(many=False)

    class Meta:
        model = Seller
        exclude = ('business_reg_no', 'business_name', 'business_reg_doc', 'sub_county', 'registration_date')

    def update(self, instance, validated_data):
        """update method to enable updates of the seller corresponding user account(profile)"""
        nested_serializer = self.fields['profile']
        profile_instance = instance.profile
        profile_update_data = validated_data.pop('profile')
        username = profile_update_data['username']
        if User.objects.filter(username__iexact=username).exists():
            if not (User.objects.get(username__iexact=username)).id == (profile_instance).id:
                raise serializers.ValidationError("A user with this username already exists.")
        profile_update_data['username'] = profile_update_data['email']
        nested_serializer.update(profile_instance, profile_update_data)

        instance.phone_number = validated_data.get("phone_number", instance.phone_number)
        instance.town = validated_data.get("town", instance.town)
        instance.local_area_name = validated_data.get("local_area_name", instance.local_area_name)
        instance.street = validated_data.get("street", instance.street)
        instance.building = validated_data.get("biulding", instance.building)
        instance.profile_pic = validated_data.get("profile_pic", instance.profile_pic)
        instance.save()

        return instance



class SellerSerializer(serializers.ModelSerializer):
    sub_county = SubCountySerializer(many=False)
    profile = serializers.PrimaryKeyRelatedField(queryset=User.objects.all(),many=False)
    class Meta:
        model = Seller
        exclude = ["business_reg_no", "business_reg_doc", "registration_date"]

class BuyerSerializer(serializers.ModelSerializer):
    profile = UserSerializer(many=False)

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

class BuyerProfileUpdateSerializer(serializers.ModelSerializer):
    profile = UpdateUserSerializer(many=False)
    class Meta:
        model = Buyer
        fields = "__all__"

    def update(self, instance, validated_data):
        """update method to enable updates of the Buyer corresponding user account(profile)"""

        nested_serializer = self.fields['profile']
        profile_instance = instance.profile
        profile_update_data = validated_data.pop('profile')
        username = profile_update_data['username']
        if User.objects.filter(username__iexact=username).exists():
            if not (User.objects.get(username__iexact=username)).id == (profile_instance).id:
                raise serializers.ValidationError("A user with this username already exists.")
        nested_serializer.update(profile_instance, profile_update_data)

        instance.phone_number = validated_data.get("phone_number", instance.phone_number)
        instance.save()

        return instance
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