import { Session } from '@libs/common/domain/entities';
import { SessionResDTO } from '@libs/auth/infra/dto';

export function mapToSession(response: SessionResDTO): Session {
    const { access_token, refresh_token } = response;
    return Session.create({
        accessToken: access_token,
        refreshToken: refresh_token,
    });
}
