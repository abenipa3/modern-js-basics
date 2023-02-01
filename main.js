// Maps and Sets are Special Objects

'use strict';

//  Map is an object that holds a key value pair.

// const fruit = new Map();

// fruit.set(1, 'Banana');
// fruit.set(2, 'Apple');
// fruit.set(3, 'Strawberry');

// document.getElementById('output').innerHTML = fruit.get(2);

// fruit.delete(2);


// fruit.forEach(item => {
//     document.getElementById('output').innerHTML += '<br>' + item;
// });

// The key and the value can be anything.

// fruit.set(4, {
//     type: 'Orange',
//     color: 'orange',
//     flavor: 'orangey'
// });

// document.getElementById('output').innerHTML = fruit.get(4).flavor;

const users = new Map();

users.set({
    name: 'Alyssa',
    email: 'alyssa@example.com'
}, function(user){
    document.getElementById('output').innerHTML += `${user.name} (${user.email}) <br>`;
});

users.set({
    name: 'Ashley',
    email: 'ashley@example.com'
}, function(user){
    document.getElementById('output').innerHTML += `(${user.email}) ${user.name} <br>`;
});

// The value is the function. The key are what we set in the map.
users.forEach((value, key) => {
    value(key);
});

// A has method where we pass in an idea and 
// it will turn into a boolean (true or false)
// if the item exists in the map.
let userAshleyExists = users.has({
    name: 'Ashley',
    email: 'ashley@example.com'
});

// Should return true because the item DOES exist in
// the map that has the following as the key:
console.log('userAshleyExists: ', userAshleyExists);

// Spoiler alert: console log reveals false because
// although an item shows in the users map, it's
//  not the same object as if they are two different keys.""