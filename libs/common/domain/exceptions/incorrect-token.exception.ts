import { DomainException } from '@libs/common/domain/exceptions/domain.exception';

export class IncorrectTokenFormat extends DomainException {
    override name = 'IncorrectTokenFormat';

    constructor() {
        super('The token format is incorrect');
    }
}
