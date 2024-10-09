export namespace SessionException {
    export class InvalidTokenFormat extends Error {
        override name = 'InvalidTokenFormat';

        constructor(tokenName: string) {
            super(`The token ['${tokenName}'] format is invalid`);
        }
    }

    export type Errors = InvalidTokenFormat;
}
