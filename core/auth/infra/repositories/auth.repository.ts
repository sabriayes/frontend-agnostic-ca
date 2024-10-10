import axios from 'axios';
import { injectable } from 'inversify';
import { Credential } from '@auth/domain/entities';
import { IAuthRepository } from '@auth/application/ports';
import { SessionResDTO, UserResDTO } from '@auth/infra/dto';
import { RequestFailedException } from '@common/exceptions';
import {
    mapToSession,
    mapToUser,
    mapToCredentialReqDTO,
} from '@auth/infra/mappers';

@injectable()
export class AuthRepository implements IAuthRepository {
    async auth(input: Credential) {
        const body = mapToCredentialReqDTO(input);
        return axios
            .post<SessionResDTO>('api/auth', body)
            .then(mapToSession)
            .catch((e) => {
                throw new RequestFailedException(e.message);
            });
    }

    async getSession() {
        return axios
            .get<UserResDTO>('api/auth')
            .then(mapToUser)
            .catch((e) => {
                throw new RequestFailedException(e.message);
            });
    }
}
