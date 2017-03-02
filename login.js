document.querySelector('#loginButton').addEventListener('click', login);
document.querySelector('#signUpButton').addEventListener('click', signUp);

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
            else {
                alert('Oh no!!!!!!!!!!!!!');
                console.log(response);
            }
        })
}
function signUp() {
    var name = document.querySelector('#name').value;
    var userName = document.querySelector('#signUpUserName').value
    var password = document.querySelector('#signUpPassword').value;
    var avi = document.querySelector('#avi').value;

    
    fetch('login address from BE here', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },

        //ask about variables on the left
        body: JSON.stringify({
            name: name,
            username: userName,
            password: password,
            avatar: avi
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
            else {
                alert('Oh no!!!!!!!!!!!!!');
                console.log(response);
            }
        })
}

