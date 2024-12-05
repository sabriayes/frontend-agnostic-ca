import { createStore } from 'zustand/vanilla';
import { container } from '@core/auth/inversify.config';
import { Session } from '@packages/common';
import { ILoginUseCase } from '@core/auth/application/ports';
import {
    AuthState,
    AuthActions,
    initState,
} from '@core/auth/presentation/store/auth.state';

export const authStore = createStore<AuthState & AuthActions>((set) => ({
    ...initState(),

    Login: async (email, password) => {
        set({
            ...initState(),
            isPending: true,
        });

        container
            .get<ILoginUseCase>('ILoginUseCase')
            .execute({ email, password })
            .then((res: Session) =>
                set({
                    ...initState(),
                    isAuthenticated: true,
                    accessToken: res.accessToken,
                    refreshToken: res.refreshToken,
                }),
            )
            .catch((err: Error) =>
                set({
                    ...initState(),
                    hasError: true,
                    error: err.message,
                }),
            );
    },
}));
