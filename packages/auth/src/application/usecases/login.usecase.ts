import { injectable, inject } from 'inversify';
import { IAuthRepository, ILoginUseCase } from '@core/auth/application/ports';
import {
    Credential,
    PropsType,
    ITokensService,
    TOKENS_SERVICE_TOKEN,
} from '@packages/common';

@injectable()
export class LoginUseCase implements ILoginUseCase {
    @inject('IAuthRepository')
    private readonly authRepository!: IAuthRepository;

    @inject(TOKENS_SERVICE_TOKEN)
    private readonly tokensService!: ITokensService;

    async execute(input: PropsType<ILoginUseCase>) {
        const credentials = Credential.create(input);
        const session = await this.authRepository.auth(credentials);
        this.tokensService.setTokens(session);
        return session;
    }
}
