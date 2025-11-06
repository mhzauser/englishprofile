from django.contrib import admin
from .models import Contact, BlogPost

@admin.register(Contact)
class ContactAdmin(admin.ModelAdmin):
    list_display = ['first_name', 'last_name', 'phone_number', 'created_at']
    list_filter = ['created_at']
    search_fields = ['first_name', 'last_name', 'phone_number']


@admin.register(BlogPost)
class BlogPostAdmin(admin.ModelAdmin):
    list_display = ['title', 'author', 'created_at', 'updated_at']
    list_filter = ['created_at', 'updated_at']
    search_fields = ['title', 'content', 'author']
