import { Credential, Session, User } from '@core/auth/domain/entities';

export interface IAuthRepository {
    auth(input: Credential): Promise<Session>;

    getSession(): Promise<User>;
}
