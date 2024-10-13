import { DomainException } from '@core/common/exceptions/domain.exception';

export class IncorrectTokenFormat extends DomainException {
    override name = 'IncorrectTokenFormat';

    constructor() {
        super('The token format is incorrect');
    }
}
