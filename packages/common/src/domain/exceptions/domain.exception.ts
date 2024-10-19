export class DomainException extends Error {
    override name = 'DomainException';

    constructor(message: string) {
        super(message);
    }
}
