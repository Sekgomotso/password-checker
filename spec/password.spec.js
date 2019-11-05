var passwordchecker = require('../src/passwordchecker')

describe('password should exist', function() {
    var exist = 'Sekgomotso#1';
    it('must be unique', () => {
        expect(passwordchecker.exist('name.exist')).toBe('Sekgomotso#1');
    });
});

describe('password should be longer than 8 characters', () => {
    it ('must have at least 8 characters', () => {
        expect(passwordchecker.length('name.length')).toBe('Sekgomotso#1');
    });
});


describe('password should have at least one lowercase letter', () => {
    it ('must have at least 1 lowercase letter', () => {
        expect(passwordchecker.lowercase('name.lowercase')).toBe('Sekgomotso#1');
    });
});

describe('password should have at least one uppercase letter', () => {
    it ('must have at least 1 uppercase letter', () => {
        expect(passwordchecker.uppercase('name.uppercase')).toBe('Sekgomotso#1');
    });
});

describe('password should have at least one digit', () => {
    it ('must have at least 1 digit', () => {
        expect(passwordchecker.digit('name.digit')).toBe('Sekgomotso#1');
    });
});

describe('password should have at least one special character', () => {
    it ('must have at least 1 special character', () => {
        expect(passwordchecker.character('name.lcharacter')).toBe('Sekgomotso#1');
    });
});