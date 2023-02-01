// Demystifying Modules
'use strict';

// No need to run bundlers first.
import { users, currentUser } from './users.js'; 
import helper from './helper.js';

// document.getElementById('output').innerHTML = users[currentUser].name;

// If we're exporting one thing from it, we could
// specify a lot less. For instance, let's use helper.

const userEmails = users.map(user => user.email);
document.getElementById('output').innerHTML = helper(userEmails).join(', ');