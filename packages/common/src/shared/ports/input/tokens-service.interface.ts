import { Session } from '@core/common/domain';

export interface ITokensService {

    readonly accessToken: string;

    readonly refreshToken: string;

    setTokens(session: Session): void;

    clearTokens(): void;

    renewTokens(): Promise<void>;
}
