import { Session } from '@core/auth/domain/entities';
import { IUseCase } from '@core/common/domain/usecase.interface';

export type ILoginUseCase = IUseCase<
    Record<'email' | 'password', string>,
    Promise<Session>
>;
