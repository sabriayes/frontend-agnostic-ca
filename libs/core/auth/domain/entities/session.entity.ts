import { IncorrectTokenFormat } from '@core/common/exceptions';
import { isToken } from '@core/common/validators';

type SessionConstructorArgs = Record<'accessToken' | 'refreshToken', string>;

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
    ) {
    }

    static create(args: SessionConstructorArgs): Session {
        if (!isToken(args.accessToken) || !isToken(args.refreshToken)) {
            throw new IncorrectTokenFormat();
        }

        return new Session(
            args.accessToken,
            args.refreshToken,
        );
    }
}
