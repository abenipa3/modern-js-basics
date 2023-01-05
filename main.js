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

// Traditional JavaScript
// function init (name, isTrue) {

//     document.getElementById('output').innerHTML = `${username.name} ({$username.email})`;

// }

// Modern JavaScript: Arrow Functions (or Arrow Notation)
const init = () => {

    document.getElementById('output').innerHTML = `${username.name} ({$username.email})`;

}

init();