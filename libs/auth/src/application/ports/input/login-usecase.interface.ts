import { IUseCase } from '@libs/common/base';
import { Session } from '@libs/common/domain/entities';

export type ILoginUseCase = IUseCase<
    Record<'email' | 'password', string>,
    Promise<Session>
>;
