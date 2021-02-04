from django.contrib import admin
from django.urls import path
from general.views import home_page,sign_in,sign_up,product_details,basket

urlpatterns = [
    path('admin/', admin.site.urls),
    path('home/', home_page),
    path('product_details/', product_details),
    path('basket/', basket),
    path('sign_in/', sign_in),
    path('sign_up/', sign_up),
]
