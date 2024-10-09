export interface AuthState {
    accessToken: string;
    refreshToken: string;
    isAuthenticated: boolean;
    isPending: boolean;
    hasError: boolean;
    error: string;
}

export interface AuthActions {
    Login: (email: string, password: string) => Promise<void>;
}

export const initState = (): AuthState => ({
    accessToken: '',
    refreshToken: '',
    isAuthenticated: false,
    isPending: false,
    hasError: false,
    error: '',
});
