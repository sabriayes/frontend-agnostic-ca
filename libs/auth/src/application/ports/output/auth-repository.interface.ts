import { Credential, Session, User } from '@libs/common/domain/entities';

export interface IAuthRepository {
    auth(input: Credential): Promise<Session>;

    getSession(): Promise<User>;
}
