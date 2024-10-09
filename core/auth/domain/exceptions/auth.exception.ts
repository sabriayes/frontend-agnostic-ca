export namespace AuthException {
    export class InvalidEmail extends Error {
        override name = 'InvalidEmail';

        constructor(email: string) {
            super(`The email ['${email}'] is invalid`);
        }
    }

    export class InvalidPassword extends Error {
        override name = 'InvalidPassword';

        constructor(pass: string) {
            super(`The password ['${pass}'] is invalid`);
        }
    }

    export type Errors = InvalidEmail | InvalidPassword;
}
