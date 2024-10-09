import { Auth, Session, User } from '@auth/domain/entities';

export interface IAuthRepository {
    auth(input: Auth): Promise<Session>;

    getSession(): Promise<User>;
}
