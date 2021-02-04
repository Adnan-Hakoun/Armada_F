/////////////////////display_product_details////////////////////////////////////
function display_product_details(product){

    let id = product.id
    let name = product.name
    let price = product.price
    let image = product.image

    $('.one_product_container').append(
        `
        <div class='product_image_container'>
            <img class='product_image' src="${image}">
        </div>
    
        <div class='product_details_container'>
    
            <div class='product_name_container'>
                <p class='product_name'>${name}</p>
            </div>
    
            <div class='product_price_container'>
                <p class='product_price'>price : ${price}</p>
            </div>
        </div>
        `
        )
    $('#product_name_input').val(name)
    $('#product_price_input').val(price)  
}

//////////////////////////////////after update product//////////////////////////////
function after_update_product(){

   window.location.href = 'http://127.0.0.1:8001/home/'
}

//////////////////////////////////update Product//////////////////////////////

function updateProduct(status){

    let parts = window.location.href.split('?id=');

    let id = parts[parts.length-1];

    let name = $('#product_name_input').val();

    let price = $('#product_price_input').val();

    let image = $('#product_image_input')[0].files[0];

    let payload = new FormData();

    payload.append('name' , name)
    payload.append('price' , price)

    if(image){payload.append('image' , image)}

    if(status=='delete'){payload.append('is_deleted' , true)};

    request(`products/${id}/`,payload,after_update_product,method='PUT')
}


//////////////////////////////////ready//////////////////////////////

$(document).ready(function(){

    let parts = window.location.href.split('?id=');

    let id = parts[parts.length-1];

    getRequest(`products/${id}/`,display_product_details)


})