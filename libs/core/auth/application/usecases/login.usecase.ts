import { injectable, inject } from 'inversify';
import { PropsType } from '@core/common/domain';
import { IAuthRepository, ILoginUseCase } from '@core/auth/application/ports';
import { Credential } from '@core/auth/domain/entities';

@injectable()
export class LoginUseCase implements ILoginUseCase {
    @inject('IAuthRepository')
    private readonly authRepository!: IAuthRepository;

    async execute(input: PropsType<ILoginUseCase>) {
        const credentialEntity = Credential.create(input);
        return this.authRepository.auth(credentialEntity);
    }
}
