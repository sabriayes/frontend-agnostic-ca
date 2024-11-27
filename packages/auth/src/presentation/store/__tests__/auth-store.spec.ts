import 'reflect-metadata';
import {
    vi,
    test,
    expect,
    describe,
    beforeAll,
    afterAll,
    beforeEach,
} from 'vitest';
import axios from 'axios';
import { authStore, AuthState } from '@core/auth/presentation/store';

vi.mock('axios');

const VALID_TOKEN_PATTERN = 'VALID.TOKEN.HERE';
const VALID_EMAIL = 'mail@domain.com';
const STRONG_PASSWORD = 'PassW0rd*!';
const WEAK_PASSWORD = '123456';
const INVALID_EMAIL = 'invalidEmail';

expect.extend({
    toBeEmptyStr: (received) => {
        const pass = typeof received === 'string' && !received.length;
        return {
            message: () => `expected "${received}" to be empty string`,
            pass,
        };
    },
});

async function waitStates(states: AuthState[]) {
    return vi.waitUntil(() => states.length == 2);
}

describe('AuthStore', () => {
    let states: AuthState[] = [];
    authStore.subscribe(s => states.push(s));

    beforeEach(() => {
        vi.clearAllMocks();
    });

    test('should set initial state', () => {
        const state = authStore.getState();
        expect(state.accessToken).toBeEmptyStr();
        expect(state.refreshToken).toBeEmptyStr();
        expect(state.hasError).toBeFalsy();
        expect(state.isAuthenticated).toBeFalsy();
    });

    describe('when login successfully', async () => {
        beforeAll(async () => {
            states = [];
            vi.mocked(axios.post).mockResolvedValue({
                data: {
                    access_token: VALID_TOKEN_PATTERN,
                    refresh_token: VALID_TOKEN_PATTERN,
                },
            });

            await authStore.getState().Login(
                VALID_EMAIL,
                STRONG_PASSWORD,
            );
            await waitStates(states);
        });

        afterAll(async () => {
            vi.clearAllMocks();
        });

        test('should set pending state', () => {
            const {
                accessToken,
                refreshToken,
                isAuthenticated,
                isPending,
                hasError,
            } = states[0];

            expect(accessToken).toBeEmptyStr();
            expect(refreshToken).toBeEmptyStr();
            expect(isAuthenticated).toBeFalsy();
            expect(isPending).toBeTruthy();
            expect(hasError).toBeFalsy();
        });

        test('and should set authenticated state with tokens', () => {
            const {
                accessToken,
                refreshToken,
                isAuthenticated,
                isPending,
                hasError,
            } = states[1];

            expect(accessToken).not.toBeEmptyStr();
            expect(refreshToken).not.toBeEmptyStr();
            expect(isAuthenticated).toBeTruthy();
            expect(isPending).toBeFalsy();
            expect(hasError).toBeFalsy();
        });
    });

    describe('when login failed', async () => {
        beforeAll(async () => {
            states = [];
            vi.mocked(axios.post).mockRejectedValue(new Error('error message'));
            await authStore.getState().Login(
                VALID_EMAIL,
                STRONG_PASSWORD,
            );
            await waitStates(states);
        });

        afterAll(async () => {
            vi.clearAllMocks();
        });

        test('set error state with message', () => {
            const {
                accessToken,
                refreshToken,
                isAuthenticated,
                isPending,
                hasError,
                error,
            } = states[1];

            expect(accessToken).toBeEmptyStr();
            expect(refreshToken).toBeEmptyStr();
            expect(isAuthenticated).toBeFalsy();
            expect(isPending).toBeFalsy();
            expect(hasError).toBeTruthy();
            expect(error).not.toBeEmptyStr();
        });
    });

    describe('when submit invalid credentials', async () => {
        beforeEach(async () => {
            states = [];
        });

        test('should set error state with message (email)', async () => {
            await authStore.getState().Login(
                INVALID_EMAIL,
                STRONG_PASSWORD,
            );
            await waitStates(states);
            const {
                isPending,
                hasError,
                error,
            } = states[1];

            expect(isPending).toBeFalsy();
            expect(hasError).toBeTruthy();
            expect(error).not.toBeEmptyStr();
        });

        test('should set error state with message (password)', async () => {
            await authStore.getState().Login(
                VALID_EMAIL,
                WEAK_PASSWORD,
            );
            await waitStates(states);
            const {
                isPending,
                hasError,
                error,
            } = states[1];

            expect(isPending).toBeFalsy();
            expect(hasError).toBeTruthy();
            expect(error).not.toBeEmptyStr();
        });
    });
});
