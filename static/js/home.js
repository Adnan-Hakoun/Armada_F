//////////////////////////////////after add product/////////////////////////
function after_update_product(data){
    console.log(data)
}

//////////////////////////////////after add product/////////////////////////
function afterAddProduct(data){console.log(data)}

//////////////////////////add to basket//////////////////////////////////
$(document).on("click", ".add_to_basket" , function(e) {
    //If you try to do something with the elements that are 
    //dynamically added to DOM using the jQuery click() method
    // it will not work, because it bind the click event only 
    //to the elements that exist at the time of binding. 
    //To bind the click event to all existing and future elements, 
    //use the jQuery on() method.
    let id = $(this).data('id');
    let payload = new FormData()
    payload.append('product_id',id)
    request(`baskets/add_products_to_basket/`,payload,after_update_product,method='POST')
    //here we will not use PUT but POST because 
    //we are not updateing the basket but adding to it(evrey many to many relations)
});

//////////////////////////display products at home//////////////////////////////////
function display_Products(data){
    
    $('#products_container').empty() // so it will not add on when doing search
   
    data.forEach(function(product) {
        let id = product.id
        let name = product.name
        let price = product.price
        let image = product.image

        $('#products_container').append(
            `
            <div class = 'one_product_container'>
                <a href="http://127.0.0.1:8001/product_details/?id=${id}/">
                    <div class='product_image_container'>
                        <img class='product_image' src="${image}">
                    </div>
                </a>
                    <div class='product_details_container'>
                
                        <div class='product_name_container'>
                            <p class='product_name'>${name}</p>
                        </div>
                
                        <div class='product_price_container'>
                            <p class='product_price'>price : ${price}</p>
                        </div>
                        <button data-id="${id}" class='add_to_basket'>add to basket</button>
                    </div>
            </div>
            `
        )
    });  
}

//////////////////////////////////add product//////////////////////////////
$(document).on('click','#product_submit',function(){

    let name = $('#product_name_input').val()
    let price = $('#product_price_input').val()
    let image = $('#product_image_input')[0].files[0];

    let payload = new FormData();

    payload.append('name' , name)
    payload.append('price' , price)
    payload.append('image' , image)

    request('products/',payload,afterAddProduct)
})

//////////////////////////////////sign out///////////////////////////////////
$(document).on('click','#sign_out',function(){
    localStorage.removeItem('token')
    window.location.href = ' http://127.0.0.1:8001/sign_in/'
})

//////////////////////////////////search by name//////////////////////////////
$(document).on('click','#search_button',function(){

    let keys = $('#search_input').val()

    getRequest(`products/?keys=${keys}`,display_Products)

    $('#search_input').val('')

})

//////////////////////////////////ready////////////////////////////////////////////    
$(document).ready(function(){
    
    let token = localStorage.getItem('token');
    
    if(!token){
        window.location.href = 'http://127.0.0.1:8001/sign_in/'
    }
    
    getRequest('products/',display_Products)
    
})