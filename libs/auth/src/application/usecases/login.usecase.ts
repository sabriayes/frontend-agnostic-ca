import { injectable, inject } from 'inversify';
import { PropsType } from '@libs/common/base';
import { IAuthRepository, ILoginUseCase } from '@libs/auth/application/ports';
import { Credential } from '@libs/common/domain/entities';

@injectable()
export class LoginUseCase implements ILoginUseCase {
    @inject('IAuthRepository')
    private readonly authRepository!: IAuthRepository;

    async execute(input: PropsType<ILoginUseCase>) {
        const credentialEntity = Credential.create(input);
        return this.authRepository.auth(credentialEntity);
    }
}
