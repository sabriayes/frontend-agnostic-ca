import { inject, injectable } from 'inversify';
import { User } from '@packages/common';
import { IAuthRepository, IGetUserUseCase } from '@core/auth/application/ports';

@injectable()
export class GetUserUseCase implements IGetUserUseCase {

    @inject('IAuthRepository')
    private readonly authRepository!: IAuthRepository;

    async execute(): Promise<User> {
        return this.authRepository.getUser();
    }
}
