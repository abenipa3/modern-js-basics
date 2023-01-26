// Async and Await

'use strict';

async function init() {
    // start
    const start = Date.now();
    document.getElementById('output').innerHTML = `0: init()`;

    // both will start at the same time
    const userPromise = getUserData();
    const welcomeStringPromise = getWelcomeString();

    // wait two seconds
    const user = await userPromise;
    document.getElementById('output').innerHTML += `<br>${Date.now() - start}: ${user.name}`;
    // wait two seconds before it shows up. will not show up until getUserData completed.
    const welcomeString = await welcomeStringPromise;
    document.getElementById('output').innerHTML += `<br>${Date.now() - start}: ${welcomeString}`;
}

function getUserData() {
    return new Promise((resolve, reject) => {
        let user = {
            name: 'Andrew',
            email: 'andrew@example.com'
        };
        setTimeout(() => {
            resolve(user);
        }, 2000);
    })
}

function getWelcomeString() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Welcome to my asyncronous program!');
        }, 2000);
    })
}
init();