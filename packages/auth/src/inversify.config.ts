import { Container } from 'inversify';
import {
    commonContainerModule,
    CONFIG_SERVICE_TOKEN,
    ICommonConfigService,
} from '@packages/common';
import { IAuthRepository, ILoginUseCase } from '@core/auth/application/ports';
import { AuthRepository } from '@core/auth/infra/repositories';
import { LoginUseCase } from '@core/auth/application/usecases';

const container = new Container({ defaultScope: 'Singleton' });

container.load(commonContainerModule);
container.bind<IAuthRepository>('IAuthRepository').to(AuthRepository);
container.bind<ILoginUseCase>('ILoginUseCase').to(LoginUseCase);

container.get<ICommonConfigService>(CONFIG_SERVICE_TOKEN).setVariables({
    port: 5000,
    apiURL: 'https://localhost',
    debugMode: true,
    maxRetryCount: 4,
    appVersion: '2.0'
});

export { container };
