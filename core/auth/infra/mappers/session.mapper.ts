import { AxiosResponse } from 'axios';
import { Session } from '@auth/domain/entities';
import { SessionDTO } from '@auth/infra/dto';

export function mapToSession(response: AxiosResponse<SessionDTO>): Session {
    const { access_token, refresh_token } = response.data;
    return Session.create({
        accessToken: access_token,
        refreshToken: refresh_token,
    });
}
