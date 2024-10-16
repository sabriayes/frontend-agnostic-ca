import { Session } from '../entities';
import { IncorrectTokenFormat } from '../exceptions';

describe('Session Entity', () => {

    const TOKEN = 'HEADER.PAYLOAD.SIGNATURE';
    const INVALID_TOKEN = 'INVALID_TOKEN.FORMAT';

    const create = (accessToken: string, refreshToken: string) =>
        () => Session.create({ accessToken, refreshToken });

    it('should create a instance with valid tokens', () => {
        expect(create(TOKEN, TOKEN)).not.toThrow();
    });

    it('should throw an error if token(s) is invalid', () => {
        expect(create(INVALID_TOKEN, INVALID_TOKEN))
            .toThrow(IncorrectTokenFormat);
        expect(create(TOKEN, INVALID_TOKEN))
            .toThrow(IncorrectTokenFormat);
        expect(create(INVALID_TOKEN, TOKEN))
            .toThrow(IncorrectTokenFormat);
    });
});
