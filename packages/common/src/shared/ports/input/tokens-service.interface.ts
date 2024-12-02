export interface ITokensService {

    readonly accessToken: string;

    readonly refreshToken: string;

    setTokens(accessToken: string, refreshToken: string): void;

    clearTokens(): void;

    renewTokens(): Promise<void>;
}
