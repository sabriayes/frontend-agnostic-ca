import { InternalAxiosRequestConfig } from 'axios';
import { ITokensService } from '@core/common/ports';

export const useAuthInterceptor = (tokensService: ITokensService) => {
    return (config: InternalAxiosRequestConfig) => {
        if (!tokensService.accessToken) {
            return config;
        }

        config.headers.Authorization = `Bearer ${tokensService.accessToken}`;
        return config;
    };
};
