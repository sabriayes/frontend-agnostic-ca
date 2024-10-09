import { Session } from '@auth/domain/entities';
import { IUseCase } from '@common/domain/usecase.interface';

type PropsType = Record<'email' | 'password', string>;
type ReturnType = Promise<Session>;

export type ILoginUseCase = IUseCase<PropsType, ReturnType>;
