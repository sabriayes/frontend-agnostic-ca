import { IUseCase, Session } from '@packages/common';
export type ILoginUseCase = IUseCase<Record<'email' | 'password', string>, Promise<Session>>;
