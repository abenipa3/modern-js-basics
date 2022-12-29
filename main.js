'use strict';

let username = {
    name: 'Alyssa',
    email: 'alyssa@example.com'
};
// window.username = username;

username = {
    name: 'Ashley',
    email: 'ashley.example.com'
};

function init () {
    // if (true) {
    //     // var email = "alyssa@example.com";
    //     let email = "alyssa@example.com";
    //     document.getElementById('output').innerHTML = email;
    // }

    document.getElementById('output').innerHTML = `${username.name} ({$username.email})`;

}

init();