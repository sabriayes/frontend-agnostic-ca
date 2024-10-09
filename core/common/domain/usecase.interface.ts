/* eslint-disable @typescript-eslint/no-unused-vars */

export interface IUseCase<T = unknown, R = unknown> {
     execute(input: T): R;
}

export type PropsType<T> = T extends IUseCase<infer T, infer R>
    ? T
    : never;

export type ReturnType<T> = T extends IUseCase<infer T, infer R>
    ? R
    : never;
