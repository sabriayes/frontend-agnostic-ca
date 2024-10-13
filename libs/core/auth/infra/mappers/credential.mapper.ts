import { CredentialReqDTO } from '@core/auth/infra/dto';
import { Credential } from '@core/auth/domain/entities';

export function mapToCredentialReqDTO(credential: Credential): CredentialReqDTO {
    return {
        email: credential.email,
        password: credential.password,
    }
}
