import { createStore } from 'zustand/vanilla';
import { container } from '@core/auth/inversify.config';
import { IGetUserUseCase } from '@core/auth/application/ports';
import { User } from '@packages/common';
import {
    UserActions,
    UserState,
    initState,
} from '@core/auth/presentation/store/user.state';

export const userStore = createStore<UserState & UserActions>((set) => ({
    ...initState(),

    GetUser: async () => {
        set({
            ...initState(),
            isPending: true,
        });

        container
            .get<IGetUserUseCase>('IGetUserUseCase')
            .execute()
            .then((user: User) => {
                const { name, surname, email, role } = user;
                set({
                    ...initState(),
                    user: {
                        name,
                        surname,
                        email,
                        role,
                    },
                });
            })
            .catch((err: Error) =>
                set({
                    ...initState(),
                    hasError: true,
                    error: err.message,
                }),
            );
    },
}));
