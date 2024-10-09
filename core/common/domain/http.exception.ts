export namespace HttpException {
    export class RequestFailed extends Error {
        override name = 'RequestFailed';

        constructor(cause: string) {
            super(`HTTP request failed ['${cause}']`);
        }
    }
}
