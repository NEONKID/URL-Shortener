from django.contrib import admin
from .models import *

# Register your models here.


@admin.register(Url)
class UrlAdmin(admin.ModelAdmin):
    list_display = ['id', 'origin']
    list_display_links = ['id', 'origin']
    list_filter = ('id', 'origin')
    list_select_related = True
    search_fields = ['origin']


admin.site.site_title = 'URL-Shortener'
admin.site.site_header = admin.site.site_title + ' Admin'