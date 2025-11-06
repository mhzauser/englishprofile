from rest_framework import serializers
from .models import Contact, BlogPost

class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = ['id', 'first_name', 'last_name', 'phone_number', 'description', 'created_at']
        read_only_fields = ['id', 'created_at']


class BlogPostSerializer(serializers.ModelSerializer):
    class Meta:
        model = BlogPost
        fields = ['id', 'title', 'content', 'author', 'created_at', 'updated_at', 'image_url']
        read_only_fields = ['id', 'created_at', 'updated_at']

