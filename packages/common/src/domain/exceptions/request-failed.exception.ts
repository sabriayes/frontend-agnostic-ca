export class RequestFailedException extends Error {
    override name = 'RequestFailedException';

    static throwWith(e: Error) {
        throw new RequestFailedException(e.message);
    }
}
