import { Container } from 'inversify';
import { IAuthRepository, ILoginUseCase } from '@auth/application/ports';
import { AuthRepository } from '@auth/infra/repositories';
import { LoginUseCase } from '@auth/application/usecases';

const container = new Container({ defaultScope: 'Singleton' })

container.bind<IAuthRepository>('IAuthRepository').to(AuthRepository);
container.bind<ILoginUseCase>('ILoginUseCase').to(LoginUseCase);

export { container };
