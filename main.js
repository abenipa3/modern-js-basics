'use strict';

// Traditional JavaScript
// function nameString() {
//     return `${username.name} ({$username.email})`;
// }

// Modern JavaScript: Arrow Functions (or Arrow Notation)
// const nameString = (name, isTrue) => `${name} ({$username.email})`;

// document.getElementById('output').innerHTML = nameString('Alyssa', true);

let users = [
    {
        name: "Alyssa",
        email: "alyssa@example.com"
    },
    {
        name: "Ashley",
        email: "ashley@example.com"
    }
];

let names = [];

// // Traditional JavaScript
// users.forEach(function(user){
//     //do something with that user object
//     names.push(user.name)
// });

users.forEach(user => names.push(user.name));

document.getElementById('output').innerHTML = names.join(', ');

document.getElementById('btn').addEventListener('click', (e) => {

    const getDetails = () => {
        console.log(this);
        return `The button id is ${e.currentTarget.getAttribute('id')}`;
    }

    document.getElementById('output').innerHTML = getDetails();

});