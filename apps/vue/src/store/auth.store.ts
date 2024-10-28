import { onMounted, ref } from 'vue';
import { authStore } from '@packages/auth';

export function useAuthStore() {

    const isPending = ref(false);
    const isAuthenticated = ref(false);
    const hasError = ref(false);
    const error = ref('');

    onMounted(() => {
        authStore.subscribe((state) => {
            isPending.value = state.isPending;
            isAuthenticated.value = state.isAuthenticated;
            hasError.value = state.hasError;
            error.value = state.error;
        });
    });

    return {
        isPending,
        isAuthenticated,
        hasError,
        error,
        Login: authStore.getState().Login,
    };
}
