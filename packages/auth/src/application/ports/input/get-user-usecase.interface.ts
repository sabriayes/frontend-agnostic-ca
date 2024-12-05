import { IUseCase, User } from '@packages/common';

export type IGetUserUseCase = IUseCase<never, Promise<User>>;
