import { Container } from 'inversify';
import { IAuthRepository, ILoginUseCase } from '@libs/auth/application/ports';
import { AuthRepository } from '@libs/auth/infra/repositories';
import { LoginUseCase } from '@libs/auth/application/usecases';

const container = new Container({ defaultScope: 'Singleton' })

container.bind<IAuthRepository>('IAuthRepository').to(AuthRepository);
container.bind<ILoginUseCase>('ILoginUseCase').to(LoginUseCase);

export { container };
