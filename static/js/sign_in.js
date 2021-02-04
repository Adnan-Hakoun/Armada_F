/////////////////////after sign in store user id and basket ////////////////////////
function store_user_id_and_basket(data){
    let username = data.username 
    let user_id = data.id
    let basket_id = data.basket

    localStorage.setItem('username' , username)
    localStorage.setItem('user_id' , user_id)
    localStorage.setItem('basket_id' , basket_id)
    window.location.href = 'http://127.0.0.1:8001/home/'
}

/////////////////////after sign in ///////////////////////////////////
function afterSignin(data){
    let token = data.access
    localStorage.setItem('token',token)
    getRequest(`users/current_user/`,store_user_id_and_basket)
}

/////////////////////after sign in ///////////////////////////////////
function signin(username,password){
   
    let payload = new FormData;
    payload.append('username' , username)
    payload.append('password' , password)

    request('api/token/',payload,function(data){afterSignin(data)})
    //when you have a function which need one parameter but you need to put 2 rarmeter 
    //you make this trick>>>to put it inside another function.
}

////////////////////////////////ready///////////////////////////////////////////////
$(document).ready(function(){
    
    let token = localStorage.getItem("token");
    if(token){window.location.href = 'http://127.0.0.1:8001/home/'};

    $(document).on('click','#sign_in_button',function(){
        let username = $('#username_input').val()
        let password = $('#password_input').val()
        signin(username,password)   
    })
})
