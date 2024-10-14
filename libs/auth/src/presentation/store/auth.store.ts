import { createStore } from 'zustand/vanilla';
import { container } from '@libs/auth/inversify.config';
import { Session } from '@libs/common/domain/entities';
import { ILoginUseCase } from '@libs/auth/application/ports';
import { AuthState, AuthActions, initState } from './auth.state';

export const authStore = createStore<AuthState & AuthActions>((set) => ({
    ...initState(),

    Login: async (email, password) => {
        set({ isPending: true });

        container
            .get<ILoginUseCase>('ILoginUseCase')
            .execute({ email, password })
            .then((res: Session) =>
                set({
                    ...res,
                    isPending: false,
                    isAuthenticated: true,
                    hasError: false,
                }),
            )
            .catch((err: Error) =>
                set({
                    isPending: false,
                    isAuthenticated: false,
                    hasError: true,
                    error: err.message,
                }),
            );
    }
}));
