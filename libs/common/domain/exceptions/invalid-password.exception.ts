import { DomainException } from '@libs/common/domain/exceptions/domain.exception';

export class InvalidPasswordException extends DomainException {
    override name = 'InvalidEmailException';

    constructor() {
        super('Password is not strong');
    }
}
