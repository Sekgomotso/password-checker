module.exports = {
    passwordIsValid,
    passwordIsOk
}

function passwordIsValid (password) {
    var password = name;
    try {
        if (name == '') throw 'No password';
        if (name == 'Sekgomotso#1') throw 'password exists';
    }
    catch(error) {
        console.log(error);
    }

    try {
        if (passwordIsValid.length.value < 8) throw 'password denied';
        if (passwordIsValid.length.value > 8) throw '';
    }
    catch(error) {
        console.log(error);
    }
}

