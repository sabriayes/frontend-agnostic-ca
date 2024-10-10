import { CredentialReqDTO } from '@auth/infra/dto';
import { Credential } from '@auth/domain/entities';

export function mapToCredentialReqDTO(credential: Credential): CredentialReqDTO {
    return {
        email: credential.email,
        password: credential.password,
    }
}
