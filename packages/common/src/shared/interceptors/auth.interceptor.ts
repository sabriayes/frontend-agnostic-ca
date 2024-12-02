import { Container } from 'inversify';
import { InternalAxiosRequestConfig } from 'axios';
import { TOKENS_SERVICE_TOKEN } from '@core/common/shared/const';
import { ITokensService } from '@core/common/shared/ports';

export const useAuthInterceptor = (container: Container) => {
    return (config: InternalAxiosRequestConfig) => {
        const tokensService = container.get<ITokensService>(TOKENS_SERVICE_TOKEN);
        if(!tokensService.accessToken) {
            return config;
        }

        config.headers.Authorization = `Bearer ${tokensService.accessToken}`;
        return config;
    };
};
