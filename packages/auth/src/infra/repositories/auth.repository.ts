import { inject, injectable } from 'inversify';
import { IAuthRepository } from '@core/auth/application/ports';
import { SessionResDTO, UserResDTO } from '@core/auth/infra/dto';
import { Credential, IHttpService, Symbols } from '@packages/common';
import {
    toCredentialReqDTO,
    fromSessionResDTO,
    fromUserResDTO,
} from '@core/auth/infra/mappers';

@injectable()
export class AuthRepository implements IAuthRepository {

    constructor(
        @inject(Symbols.HTTPService) private readonly httpService: IHttpService,
    ) {
    }

    async auth(input: Credential) {
        const body = toCredentialReqDTO(input);
        return this.httpService.post<SessionResDTO>('api/auth', body)
            .then(fromSessionResDTO);
    }

    async getSession() {
        return this.httpService.get<UserResDTO>('api/auth')
            .then(fromUserResDTO);
    }
}
