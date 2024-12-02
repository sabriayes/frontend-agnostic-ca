import axios from 'axios';
import { injectable, inject } from 'inversify';
import { ITokensService } from '@core/common/shared/ports';
import { ICommonStoreService } from '@core/common/shared/ports';
import { STORE_SERVICE_TOKEN } from '@core/common/shared/const';
import { Session } from '@core/common/domain';

@injectable()
export class TokensService implements ITokensService {

    @inject(STORE_SERVICE_TOKEN)
    private readonly storeService!: ICommonStoreService;

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

        return axios.post<Record<'accessToken' | 'refreshToken', string>>(path, body)
            .then(res => res.data)
            .then(res => {
                this.storeService.set('accessToken', res.accessToken);
                this.storeService.set('accessToken', res.accessToken);
            });
    }
}
