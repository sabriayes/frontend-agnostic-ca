import { Container } from 'inversify';
import { IAuthRepository, ILoginUseCase } from '@core/auth/application/ports';
import { AuthRepository } from '@core/auth/infra/repositories';
import { LoginUseCase } from '@core/auth/application/usecases';

const container = new Container({ defaultScope: 'Singleton' });

container.bind<IAuthRepository>('IAuthRepository').to(AuthRepository);
container.bind<ILoginUseCase>('ILoginUseCase').to(LoginUseCase);

export { container };
