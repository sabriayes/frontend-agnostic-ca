import { IAuthRepository } from "../../application/ports";
import { Credential } from '@packages/common';
export declare class AuthRepository implements IAuthRepository {
    auth(input: Credential): Promise<import("@packages/common").Session>;
    getSession(): Promise<import("@packages/common").User>;
}
