import { Session } from '@auth/domain/entities';
import { IUseCase } from '@common/domain/usecase.interface';

export type ILoginUseCase = IUseCase<
    Record<'email' | 'password', string>,
    Promise<Session>
>;
