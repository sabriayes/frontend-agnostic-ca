import axios, { AxiosError } from 'axios';
import { ITokensService } from '@core/common/ports';

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

export const useRenewTokensInterceptor = (tokensService: ITokensService) => {
    return async (error: AxiosError) => {
        if (!canRenew(error)) {
            return Promise.reject(error);
        }

        return tokensService.renewTokens()
            .then(() => createInstanceWithTokens(error, tokensService.accessToken))
            .catch(e => {
                tokensService.clearTokens();
                return Promise.reject(e);
            });
    };
};
