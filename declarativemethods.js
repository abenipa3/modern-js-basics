// Declarative Methods
// It tells the complier what we want the result to be
'use strict';

// for each item, if it contains e, keep it, otherwise, discard it


let fruit = ['Banana', 'Strawberry', 'Orange', 'Apple', 'Grape', 'Plum'];

// Example of Imperative Programming
// We're laying out the steps that our runtime needs
// to get the results.
// let fruitsThatContainE = [];
// fruit.forEach(function(fruit) {
//     if(fruit.includes('e')) {
//         fruitsThatContainE.push(fruit);
//     }
// });

// Dclarative methods: Filter Example

// This expects an inline function where the only
// argument is the current item in the fruit array.
// The filter loops through the items in the array
// and depending on the whether true or false is
// returned in the inline function, it keeps or 
// discards the item in the array.
let fruitsThatContainE = fruit.filter(f => f.includes('e'));

document.getElementById('output').innerHTML = fruitsThatContainE.join(', ');

// More declarative methods: Reduce Example

let users = [
    {
        name: 'Aragorn',
        email: 'andrew@example.com',
        stars: 5
    },
    {
        name: 'Frodo',
        email: 'frodo@example.com',
        stars: 9
    },
    {
        name: 'Sam',
        email: 'sam@example.com',
        stars: 1
    }
];

// Get the total number of stars from all users
let totalStars = users.reduce((stars, user) => stars += user.stars, 0);
// Note: Without the 0, it will return an exception
// because it cannot reduce anything down! SO we add
// 0, so that if the users have no stars, then
// it will return a 0.
document.getElementById('output').innerHTML += '<br>Total Stars: ' + totalStars;

// More declarative methods: Map Example
// Loops over items like filter and reduce.

// This will return three test strings
// let userEmails = users.map(user => 'Test');
// ['Test', 'Test', 'Test]

let userEmails = users.map(user => user.email);
document.getElementById('output').innerHTML += '<br>Emails: ' + userEmails.join(', ');
// This is helpful for pulling out specific items out
// of an array, especially large nested arrays like
// JSON APIs and creates a separate array with just
// specific values.