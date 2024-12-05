import { Container } from 'inversify';
import {
    AxiosService,
    commonContainerModule,
    ICommonConfigService,
    IHttpService,
    Symbols
} from '@packages/common';
import { IAuthRepository, ILoginUseCase } from '@core/auth/application/ports';
import { AuthRepository } from '@core/auth/infra/repositories';
import { LoginUseCase } from '@core/auth/application/usecases';

const container = new Container({ defaultScope: 'Singleton' });

container.load(commonContainerModule);
container.get<ICommonConfigService>(Symbols.ConfigService).setVariables({
    port: 5000,
    apiURL: 'https://localhost',
    debugMode: true,
    maxRetryCount: 4,
    appVersion: '2.0'
});

container.bind<IHttpService>(Symbols.HTTPService).to(AxiosService);
container.bind<IAuthRepository>('IAuthRepository').to(AuthRepository);
container.bind<ILoginUseCase>('ILoginUseCase').to(LoginUseCase);

export { container };
