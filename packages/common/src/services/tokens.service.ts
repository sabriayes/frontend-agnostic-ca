import { injectable, inject } from 'inversify';
import Symbols from '@core/common/ioc/symbols.const';
import {
    ITokensService,
    ICommonStoreService,
    IHttpService,
} from '@core/common/ports';
import { Session } from '@core/common/domain';

@injectable()
export class TokensService implements ITokensService {

    @inject(Symbols.StoreService)
    private readonly storeService!: ICommonStoreService;

    @inject(Symbols.HTTPService)
    private readonly httpService!: IHttpService;

    get accessToken(): string {
        return this.storeService.get('accessToken');
    }

    get refreshToken(): string {
        return this.storeService.get('refreshToken');
    }

    setTokens(session: Session) {
        this.storeService.set('accessToken', session.accessToken);
        this.storeService.set('refreshToken', session.refreshToken);
    }

    clearTokens() {
        this.storeService.remove('accessToken');
        this.storeService.remove('refreshToken');
    }

    async renewTokens() {
        const path = '/auth/renew-tokens';
        const body = { refreshToken: this.refreshToken };

        return this.httpService.post<Record<'accessToken' | 'refreshToken', string>>(path, body)
            .then(res => {
                this.storeService.set('accessToken', res.accessToken);
                this.storeService.set('accessToken', res.accessToken);
            });
    }
}
