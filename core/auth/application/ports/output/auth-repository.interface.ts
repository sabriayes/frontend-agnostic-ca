import { Credential, Session, User } from '@auth/domain/entities';

export interface IAuthRepository {
    auth(input: Credential): Promise<Session>;

    getSession(): Promise<User>;
}
