function afterCreateUser(data){
    console.log(data)
    alert('stop')
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
    alert('one')
    
    request('users/',payload,afterCreateUser)    
});