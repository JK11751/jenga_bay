from django.contrib import admin
from .models import *
# Register your models here.

admin.site.register(County)
admin.site.register(SubCounty)
admin.site.register(Seller)
admin.site.register(Item)
admin.site.register(Order)
admin.site.register(Buyer)
admin.site.register(Transaction)