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
    profile_pic = models.ImageField(upload_to='images/profile', default='images/profile/profile.jpg')
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

    options = (
        ("metal and steel work", "Metal and Steel Work"),
        ("cement", "Cement"),
        ("ceramics", "Ceramics"),
        ("plastics", "plastics"),
        ("wood and timber", "Wood and Timber"),
        ("sand and stone", "Sand and Stone"),
        ("bricks and masonry", "Bricks and Masonry"),
        ("fabricators", "Fabricators"),
        ("tools", "Tools"),
        ("glass", "Glass"),
        ("electrical systems", "Electrical Systems"),
        ("paints", "Paints"),
        ("plumbing", "Plumbing"),
        ("security systems", "Security Systems"),
        ("doors and windows", "Doors and Windows"),
        ("telecommunications equipment", "Telecomunications Equipment"),
        ("building safety", "Building Safety"),
        ("furniture", "Furniture"),
        ("surface finishing", "Surface Finishing"),
        ("protection", "Protection"),
        ("roofing", "Roofing"),
        ("conveyor systems", "Conveyor Systems"),
        ("composites", "Composites"),
        ("flooring", "Flooring"),
        ("adhesives", "Adhesives"),
        ("others", "Others"),
    )
    item_name = models.CharField(max_length=100, null=False)
    item_description = models.TextField(null=True)
    item_seller = models.ForeignKey(Seller, on_delete=CASCADE)
    item_main_image = models.ImageField(upload_to='images/product', default='images/product/main.jpg', null=False)
    item_extra_image1 = models.ImageField(upload_to='images/product', default='images/product/extra1.jpg', null=True)
    item_extra_image2 = models.ImageField(upload_to='images/product', default='images/product/extra2.jpg', null=True)
    item_extra_image3 = models.ImageField(upload_to='images/product', default='images/product/extra3.jpg', null=True)
    item_extra_image4 = models.ImageField(upload_to='images/product', default='images/product/extra4.jpg', null=True)
    category = models.CharField(max_length=50, choices=options, default = 'uncategorized')
    def __str__(self):
        '''returns a string representation of an instance of this model'''
        return self.item_name

    def __unicode__(self):
        return self.pk

class Order(models.Model):
    customer = models.ForeignKey(Buyer, null=False, on_delete=PROTECT)
    ordered_items = models.ManyToManyField(Item)
    date_placed = models.DateTimeField(default=datetime.now, null=True)