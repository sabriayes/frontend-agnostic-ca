import { UserRole } from '@packages/common';

export interface User {
    name: string;
    surname: string;
    email: string;
    role: UserRole;
}

export interface UserState {
    user?: User;
    isPending: boolean;
    hasError: boolean;
    error: string;
}

export interface UserActions {
    GetUser: () => Promise<void>;
}

export const initState = (): UserState => ({
    isPending: false,
    hasError: false,
    error: '',
});
