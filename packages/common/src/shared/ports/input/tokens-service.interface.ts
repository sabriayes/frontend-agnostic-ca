export interface ITokensService {

    readonly accessToken: string;

    readonly refreshToken: string;

    setTokens(accessTokens: string[], refreshTokens: string[]): void;

    clearTokens(): void;

    renewTokens(): Promise<void>;
}
