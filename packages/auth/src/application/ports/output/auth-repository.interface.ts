import { Credential, Session, User } from '@packages/common';

export interface IAuthRepository {
    auth(input: Credential): Promise<Session>;

    getSession(): Promise<User>;
}
