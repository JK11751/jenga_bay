from django.db import models
from django.db.models.deletion import CASCADE, PROTECT
from datetime import datetime, timezone

class County(models.Model):
    '''Creates county instances'''
    county_name = models.CharField(max_length=100)
    code = models.IntegerField()

    def __str__(self):
        '''returns a string representation of an instance of this model'''
        return self.county_name


class SubCounty(models.Model):
    '''Creates subcounty instances'''
    subcounty_name = models.CharField(max_length=100)
    county = models.ForeignKey(County, on_delete=PROTECT)

    def __str__(self):
        '''returns a string representation of an instance of this model'''
        return self.subcounty_name


class Seller(models.Model):
    '''Creates seller instances'''
    business_name = models.CharField(max_length=200, null=False)
    business_reg_no = models.CharField(max_length=100, null=False)
    email = models.EmailField(null=False)
    phone_number = models.CharField(max_length=15, null=False)
    sub_county = models.ForeignKey(SubCounty,null=False, on_delete=PROTECT)
    town = models.CharField(max_length=50, null=False)
    local_area_name = models.CharField(max_length=100, null=False)
    street = models.CharField(max_length=100, null=False)
    building = models.CharField(max_length=100, null=False)
    password = models.CharField(max_length=500, null=False)
    business_reg_doc = models.ImageField(upload_to='images/profile', default='images/profile/profile.jpg')
    is_registered = models.BooleanField(default=False, null=False)
    registration_date = models.DateTimeField(null=True, default=datetime.now)

    def __str__(self):
        '''returns a string representation of an instance of this model'''
        return self.business_name


class Buyer(models.Model):
    '''Creates buyer instances'''
    buyer_name = models.CharField(max_length=100, null=False)
    email_address = models.EmailField(null=False)
    phone_number = models.CharField(max_length=15, null=False)
    password = models.CharField(max_length=500, null=False)

    def __str__(self):
        '''returns a string representation of an instance of this model'''
        return self.buyer_name


class Item(models.Model):
    '''Creates instances of a product'''
    item_name = models.CharField(max_length=100, null=False)
    item_descripton = models.TextField(null=True)
    item_seller = models.ForeignKey(Seller, on_delete=CASCADE)
    item_main_image = models.ImageField(upload_to='images/product', default='images/product/main.jpg', null=False)
    item_extra_image1 = models.ImageField(upload_to='images/product', default='images/product/extra1.jpg', null=True)
    item_extra_image2 = models.ImageField(upload_to='images/product', default='images/product/extra2.jpg', null=True)
    item_extra_image3 = models.ImageField(upload_to='images/product', default='images/product/extra3.jpg', null=True)
    item_extra_image4 = models.ImageField(upload_to='images/product', default='images/product/extra4.jpg', null=True)

    def __str__(self):
        '''returns a string representation of an instance of this model'''
        return self.item_name

    def __unicode__(self):
        return self.pk

class Order(models.Model):
    customer = models.ForeignKey(Buyer, null=False, on_delete=PROTECT)
    ordered_items = models.ManyToManyField(Item)
    date_placed = models.DateTimeField(default=datetime.now, null=True)