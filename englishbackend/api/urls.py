from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ContactViewSet, BlogPostViewSet

router = DefaultRouter()
router.register(r'contacts', ContactViewSet, basename='contact')
router.register(r'blog', BlogPostViewSet, basename='blogpost')

urlpatterns = [
    path('api/', include(router.urls)),
]

