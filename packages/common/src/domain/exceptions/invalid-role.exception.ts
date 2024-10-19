import { DomainException } from '@core/common/domain/exceptions/domain.exception';

export class InvalidRoleException extends DomainException {
    override name = 'InvalidRoleException';

    constructor() {
        super('Role is not exists in available roles list');
    }
}
