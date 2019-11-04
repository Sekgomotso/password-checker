module.exports = {
    exist,
    length
}

function exist () {
    var name;
    try {
        if (name == '') throw 'No password';
        if (name == 'Sekgomotso#1') throw 'password exists';
    }
    catch(error) {
        console.log(error);
    }   
}

function length () {
    var name = Sekgomotso;
    var sln = txt.length;
    try {
        if (sln < 8) throw 'Password denied';
        if (sln >= 8) throw 'password exists';
    }
    catch(error) {
        console.log(error);
    }   
}