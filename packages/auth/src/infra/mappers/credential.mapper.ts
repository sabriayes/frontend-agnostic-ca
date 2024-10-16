import { CredentialReqDTO } from '@core/auth/infra/dto';
import { Credential } from '@packages/common';

export function mapToCredentialReqDTO(credential: Credential): CredentialReqDTO {
    return {
        email: credential.email,
        password: credential.password,
    }
}
