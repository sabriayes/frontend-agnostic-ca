export class RequestFailedException extends Error {
    override name = 'RequestFailedException';

    static of(e: Error): RequestFailedException {
        return new RequestFailedException(e.message);
    }
}
