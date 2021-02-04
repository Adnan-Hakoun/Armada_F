from django.shortcuts import render

def home_page(request):
    return render(request,'home.html')

def sign_in(request):
    return render(request,'sign_in.html')

def sign_up(request):
    return render(request,'sign_up.html')

def product_details(request):
    return render(request,'product_details.html')

def basket(request):
    return render(request,'basket.html')    
