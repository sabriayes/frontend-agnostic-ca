import axios from 'axios';
import { injectable } from 'inversify';
import { Auth } from '@auth/domain/entities';
import { IAuthRepository } from '@auth/application/ports';
import { SessionDTO, UserDTO } from '@auth/infra/dto';
import { mapToSession, mapToUser } from '@auth/infra/mappers';
import { RequestFailedException } from '@common/exceptions';

@injectable()
export class AuthRepository implements IAuthRepository {
    async auth(input: Auth) {
        return axios
            .post<SessionDTO>('api/auth', input)
            .then(mapToSession)
            .catch((e) => {
                throw new RequestFailedException(e.message);
            });
    }

    async getSession() {
        return axios
            .get<UserDTO>('api/auth')
            .then(mapToUser)
            .catch((e) => {
                throw new RequestFailedException(e.message);
            });
    }
}
