import { injectable, inject } from 'inversify';
import { PropsType } from '@common/domain';
import { IAuthRepository, ILoginUseCase } from '@auth/application/ports';
import { Auth } from '@auth/domain/entities';

@injectable()
export class LoginUseCase implements ILoginUseCase {
    @inject('IAuthRepository')
    private readonly authRepository!: IAuthRepository;

    async execute(input: PropsType<ILoginUseCase>) {
        const authEntity = Auth.create(input);
        return this.authRepository.authBasic(authEntity);
    }
}
