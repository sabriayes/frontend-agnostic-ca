import axios from 'axios';
import { injectable } from 'inversify';
import { HttpException } from '@common/domain';
import { Auth } from '@auth/domain/entities';
import { IAuthRepository } from '@auth/application/ports';
import { SessionDTO, UserDTO } from '@auth/infra/dto';
import { mapToSession, mapToUser } from '@auth/infra/mappers';

@injectable()
export class AuthRepository implements IAuthRepository {
    async authBasic(input: Auth) {
        return axios
            .post<SessionDTO>('api/auth', input)
            .then(mapToSession)
            .catch((e) => {
                throw new HttpException.RequestFailed(e.message);
            });
    }

    async checkSession() {
        return axios
            .get<UserDTO>('api/auth')
            .then(mapToUser)
            .catch((e) => {
                throw new HttpException.RequestFailed(e.message);
            });
    }
}
