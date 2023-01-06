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
function nameString() {
    return `${username.name} ({$username.email})`;
}

// Modern JavaScript: Arrow Functions (or Arrow Notation)
const nameString = () => `${username.name} ({$username.email})`;

document.getElementById('output').innerHTML = nameString();