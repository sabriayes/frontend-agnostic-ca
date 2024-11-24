import axios from 'axios';
import { injectable } from 'inversify';
import { IAuthRepository } from '@core/auth/application/ports';
import { SessionResDTO, UserResDTO } from '@core/auth/infra/dto';
import { RequestFailedException, Credential } from '@packages/common';
import {
    toCredentialReqDTO,
    fromSessionResDTO,
    fromUserResDTO,
} from '@core/auth/infra/mappers';

@injectable()
export class AuthRepository implements IAuthRepository {
    async auth(input: Credential) {
        const body = toCredentialReqDTO(input);
        return axios
            .post<SessionResDTO>('api/auth', body)
            .then(res => res.data)
            .then(fromSessionResDTO)
            .catch(RequestFailedException.throwWith);
    }

    async getSession() {
        return axios
            .get<UserResDTO>('api/auth')
            .then(res => res.data)
            .then(fromUserResDTO)
            .catch(RequestFailedException.throwWith);
    }
}
