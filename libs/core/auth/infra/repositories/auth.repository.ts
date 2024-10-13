import axios from 'axios';
import { injectable } from 'inversify';
import { Credential } from '@core/auth/domain/entities';
import { IAuthRepository } from '@core/auth/application/ports';
import { SessionResDTO, UserResDTO } from '@core/auth/infra/dto';
import { RequestFailedException } from '@core/common/exceptions';
import {
    mapToSession,
    mapToUser,
    mapToCredentialReqDTO,
} from '@core/auth/infra/mappers';

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
