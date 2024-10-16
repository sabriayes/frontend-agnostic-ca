import { Credential } from '../entities';
import {
    InvalidEmailException,
    InvalidPasswordException,
} from '../exceptions';

describe('Credential Entity', () => {

    const EMAIL = 'email@domain.com';
    const PASSWORD = 'PassW0r!d*';
    const INVALID_EMAIL = 'invalidEmail';
    const WEAK_PASSWORD = '123456';

    const create = (email: string, password: string) =>
        () => Credential.create({ email, password });

    it('should create a instance with valid email and password', () => {
        expect(create(EMAIL, PASSWORD)).not.toThrow();
    });

    it('should throw an error if email and password is invalid', () => {
        expect(create(INVALID_EMAIL, WEAK_PASSWORD)).toThrow();
    });

    it('should throw an error if email is invalid', () => {
        expect(create(INVALID_EMAIL, PASSWORD))
            .toThrow(InvalidEmailException);
    });

    it('should throw an error if password is too weak', () => {
        expect(create(EMAIL, WEAK_PASSWORD))
            .toThrow(InvalidPasswordException);
    });
});
