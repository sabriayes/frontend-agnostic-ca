import { Auth, Session, User } from '@auth/domain/entities';

export interface IAuthRepository {
    authBasic(input: Auth): Promise<Session>;

    checkSession(): Promise<User>;
}
