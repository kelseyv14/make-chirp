document.querySelector('#users').addEventListener('click', function(e) {
    var userListItem = e.target;
    var userId = userListItem.dataset.id;

    location.href = 'friends.html?userId=' + userId;
});



getUsers();

function getUsers() {
    var token = sessionStorage.getItem('token');

    fetch('')
    .then(function(response) {
        return response.json();
    })
    .then(function(response) {
        renderUsersList(response);
    })
}

function renderUsersList(user) {
    

    users.forEach(function(user) {
        var userListItem = `<li data-id="${user.id}" class="list-group-item">${user.username}<button type="button" class="btn btn-default"  id="follow">follow</button><button type="button" class="btn btn-default"  id="unfollow">unfollow</button></li><hr class="style">`;

        document.querySelector('#users').innerHTML += userListItem;
    });
}

