import { SessionException } from '@auth/domain/exceptions/session.exception';

type SessionProps = Record<'accessToken' | 'refreshToken', string>;

export class Session {
    get accessToken() {
        return this._accessToken;
    }

    get refreshToken() {
        return this._refreshToken;
    }

    constructor(
        private _accessToken: string,
        private _refreshToken: string,
    ) {}

    static create(props: SessionProps): Session {
        const regex = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+$/;

        if (!regex.test(props.accessToken)) {
            throw new SessionException.InvalidTokenFormat('accessToken');
        }

        if (!regex.test(props.refreshToken)) {
            throw new SessionException.InvalidTokenFormat('refreshToken');
        }

        return new Session(props.accessToken, props.refreshToken);
    }
}
