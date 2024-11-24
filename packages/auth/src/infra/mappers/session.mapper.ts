import { Session } from '@packages/common';
import { SessionResDTO } from '@core/auth/infra/dto';

export function fromSessionResDTO(response: SessionResDTO): Session {
    const { access_token, refresh_token } = response;
    return Session.create({
        accessToken: access_token,
        refreshToken: refresh_token,
    });
}
