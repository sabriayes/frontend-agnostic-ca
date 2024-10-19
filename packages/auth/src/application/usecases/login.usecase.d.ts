import { ILoginUseCase } from "../ports";
import { PropsType } from '@packages/common';
export declare class LoginUseCase implements ILoginUseCase {
    private readonly authRepository;
    execute(input: PropsType<ILoginUseCase>): Promise<import("@packages/common").Session>;
}
