// Promises are Made

'use strict';

let myPromise = new Promise((resolve, reject) => {
    // call an api
    let user = {
        name: 'Andrew',
        email: 'andrew@example.com'
    };
    setTimeout(() => {
        resolve(user);
        // reject('Sorry, could not retrieve the user.');
    }, 2000);
});

const getAdditionalUserData = user => {
    return new Promise((resolve, reject) => {
        // calling another api to get more user data
        let additionalData = {
            favoriteColor: 'Blue',
            currentDrink: 'Water'
        };

        setTimeout(() => {
            resolve(user);
        }, 2000);
    });
}

// method chaining
myPromise.then((user) => {
    document.getElementById('output').innerHTML = `${user.name} (${user.email})`;
}).catch((error) => {
    document.getElementById('output').innerHTML = error;
})

document.getElementById('output').innerHTML = "No blocking! :)";