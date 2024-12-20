import { describe, it, expect } from 'vitest';
import { Session } from '@core/common/domain/entities';
import { IncorrectTokenFormat } from '@core/common/domain/exceptions';

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
