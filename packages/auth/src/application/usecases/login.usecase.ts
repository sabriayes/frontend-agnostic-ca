import { injectable, inject } from 'inversify';
import { IAuthRepository, ILoginUseCase } from '@core/auth/application/ports';
import { Credential, PropsType } from '@packages/common';

@injectable()
export class LoginUseCase implements ILoginUseCase {
    @inject('IAuthRepository')
    private readonly authRepository!: IAuthRepository;

    async execute(input: PropsType<ILoginUseCase>) {
        const credentialEntity = Credential.create(input);
        return this.authRepository.auth(credentialEntity);
    }
}
