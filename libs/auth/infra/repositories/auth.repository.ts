import axios from 'axios';
import { injectable } from 'inversify';
import { Credential } from '@libs/common/domain/entities';
import { IAuthRepository } from '@libs/auth/application/ports';
import { SessionResDTO, UserResDTO } from '@libs/auth/infra/dto';
import { RequestFailedException } from '@libs/common/domain/exceptions';
import {
    mapToSession,
    mapToUser,
    mapToCredentialReqDTO,
} from '@libs/auth/infra/mappers';

@injectable()
export class AuthRepository implements IAuthRepository {
    async auth(input: Credential) {
        const body = mapToCredentialReqDTO(input);
        return axios
            .post<SessionResDTO>('api/auth', body)
            .then((res) => mapToSession(res.data))
            .catch((e) => {
                throw new RequestFailedException(e.message);
            });
    }

    async getSession() {
        return axios
            .get<UserResDTO>('api/auth')
            .then((res) => mapToUser(res.data))
            .catch((e) => {
                throw new RequestFailedException(e.message);
            });
    }
}
