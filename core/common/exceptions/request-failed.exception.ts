export class RequestFailedException extends Error {
    override name = 'RequestFailedException';

    constructor(cause: string) {
        super(`HTTP request failed ['${cause}']`);
    }
}
