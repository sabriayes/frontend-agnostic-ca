import { DomainException } from '@core/common/exceptions/domain.exception';

export class InvalidEmailException extends DomainException {
    override name = 'InvalidEmailException';

    constructor() {
        super('Email address is invalid');
    }
}
