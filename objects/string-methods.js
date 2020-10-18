let name = 'Andrew Mead'

// Length property
console.log(name.length);

// Convert to upper case
console.log(name.toUpperCase());

// Includes method
let password = 'abc123passwod098';
let hasPassword = password.includes('password');
console.log(hasPassword);

//Trim
let greeting = '  Hello world!  ';
console.log(greeting);
console.log(greeting.trim());

// isValidPassword
// length is more than 8 - and doesn't contain the word password

let isValidPassword = function (inputPassword) {
    trimedPassword = inputPassword.trim();
    return trimedPassword.length > 8 && !trimedPassword.includes('password')
}

console.log(isValidPassword('test'));
console.log(isValidPassword('password'));
console.log(isValidPassword('passworssss'))