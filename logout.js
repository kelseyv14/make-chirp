document.querySelector('#loginButton').addEventListener('click', login);


function login() {
    var userName = document.querySelector('#uName').value;
    var password = document.querySelector('#password').value;

    fetch('login address from BE here', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        

        //ask about variables on the left
        body: JSON.stringify({
            username: userName,
            password: password
        })
    })
        .then(function(response) {
            return response.json();
        })
        .then(function(response) {
            if (response.token) {
                sessionStorage.setItem('token', response.token);
                location.href = 'main.html';
            }
        })
}


