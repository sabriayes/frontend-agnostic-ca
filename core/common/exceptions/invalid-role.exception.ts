import { DomainException } from '@common/exceptions/domain.exception';

export class InvalidRoleException extends DomainException {
    override name = 'InvalidRoleException';

    constructor() {
        super('Role is not exists in available roles list');
    }
}
