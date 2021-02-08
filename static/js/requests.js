const baseUrl = 'http://127.0.0.1:8000/'

function getRequest(endpoint,success){
    const token = localStorage.getItem('token')
    let headers = token ? {'Authorization': 'Bearer '+token}:{}
    $.ajax({
        headers,
        url: baseUrl+endpoint,
        type: 'GET',
        contentType: false, 
        processData: false, 
        success
    })
}


function request(endpoint,payload,success,method='POST'){
    const token = localStorage.getItem('token')
    let headers = token ? {'Authorization': 'Bearer '+token}:{} 
    $.ajax({
        headers,
        url: baseUrl+endpoint,
        data: payload,
        type : method,
        timeout: 1000,
        contentType: false,
        processData: false,
        success
    })
}