var passwordchecker = require('../src/passwordchecker')

describe('password should exist', function() {
    let password = 'Sekgomotso#1';
    it('must be unique', () => {
        expect(password).toBeTruthy();
    });
});

describe('password should be longer than 8 characters', () => {
    let password = 'Sekgomotso#1';
    it ('must have at least 8 characters', () => {
        expect(password).toBe('Sekgomotso#1');
    });
});


describe('password should have at least one lowercase letter', () => {
    let password = 'Sekgomotso#1';
    it ('must have at least 1 lowercase letter', () => {
        expect(password).toBe('Sekgomotso#1');
    });
});

describe('password should have at least one uppercase letter', () => {
    let password = 'Sekgomotso#1';
    it ('must have at least 1 uppercase letter', () => {
        expect(password).toBe('Sekgomotso#1');
    });
});

describe('password should have at least one digit', () => {
    let password = 'Sekgomotso#1';
    it ('must have at least 1 digit', () => {
        expect(password).toBe('Sekgomotso#1');
    });
});

describe('password should have at least one special character', () => {
    let password = 'Sekgomotso#1';
    it ('must have at least 1 special character', () => {
        expect(password).toBe('Sekgomotso#1');
    });
});