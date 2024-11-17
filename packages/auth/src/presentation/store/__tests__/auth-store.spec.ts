import 'reflect-metadata';
import { describe, test, expect, vi, beforeAll } from 'vitest';
import { authStore, AuthState } from '@core/auth/presentation/store';
import axios from 'axios';

vi.mock('axios');

const VALID_TOKEN_PATTERN = 'VALID.TOKEN.HERE';
const VALID_EMAIL = 'mail@domain.com';
const STRONG_PASSWORD = 'PassW0rd*!';

describe('AuthStore', () => {

    beforeEach(() => {
        vi.clearAllMocks();
    });

    test('should set default value', () => {
        const state = authStore.getState();
        expect(state.accessToken).toBe('');
        expect(state.refreshToken).toBe('');
        expect(state.hasError).toBeFalsy();
        expect(state.isAuthenticated).toBeFalsy();
    });

    describe('when login successfully', async () => {
        const states: AuthState[] = [];

        beforeAll(async () => {
            authStore.subscribe(s => states.push(s));
            axios.post.mockResolvedValue({
                data: {
                    access_token: VALID_TOKEN_PATTERN,
                    refresh_token: VALID_TOKEN_PATTERN
                },
            });

            await authStore.getState().Login(
                VALID_EMAIL,
                STRONG_PASSWORD,
            );
            await vi.waitUntil(() => states.length == 2);
        });

        test('should set pending state first ', async () => {
            const {
                accessToken,
                refreshToken,
                isAuthenticated,
                isPending,
                hasError,
            } = states[0];

            expect(accessToken).toBe('');
            expect(refreshToken).toBe('');
            expect(isAuthenticated).toBeFalsy();
            expect(isPending).toBeTruthy();
            expect(hasError).toBeFalsy();
        });

        test('should set authenticated state with valid tokens after successful login', async () => {
            const {
                accessToken,
                refreshToken,
                isAuthenticated,
                isPending,
                hasError,
            } = states[1];

            expect(accessToken).not.toBe('');
            expect(refreshToken).not.toBe('');
            expect(isAuthenticated).toBeTruthy();
            expect(isPending).toBeFalsy();
            expect(hasError).toBeFalsy();
        });
    });
});
