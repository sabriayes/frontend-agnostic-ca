import { CredentialReqDTO } from '@libs/auth/infra/dto';
import { Credential } from '@libs/common/domain/entities';

export function mapToCredentialReqDTO(credential: Credential): CredentialReqDTO {
    return {
        email: credential.email,
        password: credential.password,
    }
}
