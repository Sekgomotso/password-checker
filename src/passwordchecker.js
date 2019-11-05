// module.exports = {
//     passwordIsValid,
//     passwordIsOk
// }

function passwordIsValid (password) {

    try {
        if (password == '') throw 'No password';
        if (password.length <= 8) throw 'password should be longer than 8 characters';
        if (password.match(/[a-z]/) == null) throw 'password should have at least one lowercase letter.';
        if (password.match(/[A-Z]/) == null) throw 'password should have at least one uppercase letter.';
        if (password.match(/[0-9]/) == null) throw 'password should have at least one digit.';
        if (password.match(/[{ # % & * " ']/) == null) throw 'password should have at least one special character.';
    }
    catch(error) {
        console.log(error);
    }
}

passwordIsValid('Sekgomotso#1');
