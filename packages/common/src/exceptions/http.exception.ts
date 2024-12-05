export class HttpException extends Error {
    override name = 'HTTPErrorException';

    static of(e: Error): HttpException {
        return new HttpException(e.message);
    }

    static reject(e: Error): Promise<never> {
        return Promise.reject(
            new HttpException(e.message),
        );
    }
}
