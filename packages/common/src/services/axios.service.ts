import { inject, injectable } from 'inversify';
import axios, { AxiosInstance } from 'axios';
import Symbols from '@core/common/ioc/symbols.const';
import { HttpException } from '@core/common/exceptions';
import { IHttpService, ITokensService } from '@core/common/ports/input';
import { ICommonConfigService } from '@core/common/config';
import {
    useAuthInterceptor,
    useRenewTokensInterceptor,
} from '@core/common/interceptors';

@injectable()
export class AxiosService implements IHttpService {
    private readonly axiosInstance!: AxiosInstance;

    constructor(
        @inject(Symbols.ConfigService) readonly configService: ICommonConfigService,
        @inject(Symbols.TokensService) readonly tokenService: ITokensService,
    ) {
        this.axiosInstance = axios.create({
            baseURL: configService.get('apiURL'),
            responseType: 'json',
            timeout: 10_000,
        });

        this.axiosInstance.interceptors.request.use(
            useAuthInterceptor(tokenService),
        );

        this.axiosInstance.interceptors.response.use(
            (response) => response,
            useRenewTokensInterceptor(tokenService),
        );
    }

    async get<T>(path: string, options?: RequestInit): Promise<T> {
        return this.axiosInstance.get(path, options as any)
            .then((response) => response.data as T)
            .catch(HttpException.reject);
    }

    async post<T, D = any>(
        path: string,
        body: D,
        options?: RequestInit,
    ): Promise<T> {
        return this.axiosInstance.post(path, body, options as any)
            .then((response) => response.data as T)
            .catch(HttpException.reject);
    }
}
