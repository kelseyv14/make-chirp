getAvi();
getUserName();
sendMessage();
getMessages();

document.querySelector('#logout').addEventListener('click', function() {
    sessionStorage.clear();
    location.href = 'logout.html?logout=yes';
    });    
document.querySelector('#sendMessage').addEventListener('click', sendMessage);

function getAvi() {
    var avi = document.querySelector('#avi').value;
    var token = sessionStorage.getItem('token');

    document.querySelector('#avi').value = '';

    fetch('', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },

        
        body: JSON.stringify({
            body: avi,
            token: token
        })
    })
        .then(function(response) {
            return response.json();
        })
        .then(function(response) {
            

        })};
function placeAvi(avi) {
    var aviPlace = `<div class="text-center-item">${avi.body}
                    <img class="avatarEdit" data-id="${avi.id}"/>`;
    var currentAviHTML = document.querySelector('#avi').innerHTML;

    document.querySelector('#avi').innerHTML;

function getUserName() {
    var userName = document.querySelector('#userName').value;
    var token = sessionStorage.getItem('token');

    document.querySelector('#userName').value = '';

    fetch('', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },

        
        body: JSON.stringify({
            body: userName,
            token: token
        })
    })
        .then(function(response) {
            return response.json();
        })
        .then(function(response) {
            

        })};
function placeUserName(userName) {
    var userNamePlace =  `<div class="text-center-item">${userName.body}<h4><a data-id="userName">"${userName.id}"</a></h4>` 
    document.querySelector('#userName').innerHTML;
}                



function sendMessage() {
    var message = document.querySelector('#message').value;
    var token = sessionStorage.getItem('token');

    document.querySelector('#message').value = '';

    fetch('', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },

        
        body: JSON.stringify({
            body: message,
            token: token
        })
    })
        .then(function(response) {
            return response.json();
        })
        .then(function(response) {
            

            var messageSent = document.querySelector('#messageSent');
            messageSent.classList.remove('hidden');
            messageSent.children[0].innerHTML = 'Message Sent: ' + response.body;

            setTimeout(function() {
                messageSent.classList.add('hidden');
            }, 3000);

        })
}   
function getMessages() {
    var token = sessionStorage.getItem('token');
    var userID = location.href.split('?')[1].split('=').pop();

    fetch('' + userID + '/messages')
    .then(function(response) {
        return response.json();
    })
    .then(function(response) {
        renderMessagesList(response);
    })
}

function renderMessagesList(messages) {
    messages = messages.reverse();
    messages.forEach(createMessage);
}

function createMessage(message) {

    var messageListItem = `<li data-id="${message.id}" class="list-group-item">${message.body}</li>`;
    var currentMessagesHTML = document.querySelector('#messages').innerHTML;

    document.querySelector('#messages').innerHTML = messageListItem + currentMessagesHTML + messageSent;
}


