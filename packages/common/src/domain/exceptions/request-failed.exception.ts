export class RequestFailedException extends Error {
    override name = 'RequestFailedException';

    constructor(cause: string) {
        super(`HTTP request failed ['${cause}']`);
    }

    static throwWith(e: Error) {
        throw new RequestFailedException(e.message);
    }
}
