import { Container } from 'inversify';
import axios, { AxiosError } from 'axios';
import { TOKENS_SERVICE_TOKEN } from '@core/common/shared/const';
import { ITokensService } from '@core/common/shared/ports';

const canRenew = (error: AxiosError): boolean =>
    error.response?.status === 401;

/**
 * @param error
 * @param token - New access token
 */
const createInstanceWithTokens = (error: AxiosError, token: string) => axios({
    ...error.config!,
    headers: {
        ...error.config!.headers,
        Authorization: `Bearer ${token}`,
    },
});

export const useRenewTokensInterceptor = (container: Container) => {
    return async (error: AxiosError) => {
        if (!canRenew(error)) {
            return Promise.reject(error);
        }

        const tokensService = container.get<ITokensService>(TOKENS_SERVICE_TOKEN);
        return tokensService.renewTokens()
            .then(() => createInstanceWithTokens(error, tokensService.accessToken))
            .catch(e => {
                tokensService.clearTokens();
                return Promise.reject(e);
            });
    };
};
