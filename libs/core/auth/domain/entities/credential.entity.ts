import {
    InvalidEmailException,
    InvalidPasswordException,
} from '@core/common/exceptions';
import { isEmail, isStrongPassword } from '@core/common/validators';

type CredentialConstructorArgs = Record<'email' | 'password', string>;

export class Credential {
    get email() {
        return this._email;
    }

    get password() {
        return this._password;
    }

    constructor(
        private _email: string,
        private _password: string,
    ) {
    }

    static create(args: CredentialConstructorArgs): Credential {

        if (!isEmail(args.email)) {
            throw new InvalidEmailException();
        }

        if (!isStrongPassword(args.password)) {
            throw new InvalidPasswordException();
        }

        return new Credential(
            args.email,
            args.password,
        );
    }
}
