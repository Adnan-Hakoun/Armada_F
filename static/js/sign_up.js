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

//////////////////////////after sign_in/////////////////////////////////////
function afterSignin(data){
    let token = data.access
    localStorage.setItem('token',token)
    getRequest(`users/current_user/`,store_user_id_and_basket)
}

//////////////////////////after create user/////////////////////////////////////
function afterCreateUser(data,username,password){
    console.log(data)
    let payload = new FormData;
    payload.append('username' , username)
    payload.append('password' , password)

    request('api/token/',payload,function(data){afterSignin(data)})
    
}
////////////////////////////Sign-up///////////////////////////////
$(document).on( "click",'#sign_up_button' ,function() {
   
    let username = $('#username_input').val()
    let password = $('#password_input').val()
    let age = $('#age_input').val()

    let payload = new FormData()

    payload.append('username',username);
    payload.append('password',password);
    payload.append('age',age);
    
    
    request('users/',payload,function(data){afterCreateUser(data,username,password)})    
});