module.exports = {
    passwordIsValid,
    passwordIsOk
}

function passwordIsValid (password) {

    try {
        // password should exist
        if (password == '') throw 'password cannot be blank'; 

        // password should be longer than 8 characters
        if (password.length <= 8) throw 'password should be longer than 8 characters';

        // password should have at least one lowercase letter
        if (password.match(/[a-z]/) == null) throw 'password should have at least one lowercase letter.';

        // password should have at least one uppercase letter
        if (password.match(/[A-Z]/) == null) throw 'password should have at least one uppercase letter.';

        // password should have at least one digit
        if (password.match(/[0-9]/) == null) throw 'password should have at least one digit.';

        // password should have at least one special character
        if (password.match(/[{ # % & * " ' ! @ $ ^]/) == null) throw 'password should have at least one special character.';
    }
    catch(error) {
        console.log(error);
    }
}

passwordIsValid('Sekgomotso#1');

// If the given password meets at least three of the conditions listed above then this function should return true, otherwise it should return false.
function passwordIsOk (password) {
    if (password == '' && password.length <= 8) {
        if (password.match(/[a-z]/) == null || password.match(/[A-Z]/) == null || password.match(/[0-9]/) == null || password.match(/[{ # % & * " ' ! @ $ ^]/) == null) {
            return false;
        } 
    } else {
        return true;
    }
}

console.log(passwordIsOk('Sekgomotso#1'));