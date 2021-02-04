/////////////////////////////display products////////////////////////////
function display_Products(data){
    console.log(data[0].products); //this is how access nested json 
    let products = data[0].products;
    
    products.forEach(function(product) {
        let id = product.id
        let name = product.name
        let price = product.price
        let image = product.image

        $('#products_container').append(
            `
            <div class = 'one_product_container'>
                <a href="http://127.0.0.1:8001/product_details.html?id=${id}">
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
                        
                    </div>
                
            </div>
            `
        )
    });
}

////////////////////ready//////////////////////////////////
$(document).ready(function(){
    let basket_id = localStorage.getItem('basket_id')
    getRequest(`baskets/?basket_id=${basket_id}`,display_Products)
    
})