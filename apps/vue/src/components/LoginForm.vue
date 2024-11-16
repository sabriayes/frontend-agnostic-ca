<script setup lang="ts">
import { computed, reactive, watch } from 'vue';
import { useAuthStore } from '@/store/auth.store';
import LoginFormHeader from '@/components/LoginFormHeader.vue';
import LoginFormButton from '@/components/LoginFormButton.vue';
import useVuelidate from '@vuelidate/core';
import { required, email, helpers } from '@vuelidate/validators';
import { useRouter } from 'vue-router';

const rules = {
    form: {
        email: {
            required: helpers.withMessage('Email field is required', required),
            email: helpers.withMessage(
                'Please enter a valid email address',
                email,
            ),
        },
        password: {
            required: helpers.withMessage(
                'Password field is required',
                required,
            ),
            minLength: helpers.withMessage(
                'Password must be at least 8 characters long, include at least one number and one special character',
                (value: string) =>
                    /^(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/.test(value),
            ),
        },
    },
};

const router = useRouter();
const { isPending, Login, hasError, error, isAuthenticated } = useAuthStore();
const form = reactive({
    email: 'mail@domain.com',
    password: 'Pas5W0rd!',
});
const v$ = useVuelidate(rules, { form }, { $autoDirty: true });

const isDisabled = computed(() => v$.value.$invalid);

watch(isAuthenticated, (n, p) => {
    if (n) {
        router.push('/dashboard');
    }
});

function submitForm() {
    if (isPending.value || isDisabled.value) return;

    Login(form.email, form.password);
}
</script>

<template>
    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
        <LoginFormHeader />
        <div
            v-if="hasError"
            class="p-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
        >
            <span class="font-medium">{{ error }}</span>
        </div>

        <div class="space-y-4 md:space-y-6">
            <div>
                <label
                    for="email"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                    Email
                </label>
                <input
                    v-model="form.email"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="mail@domain.com"
                    class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                <small v-if="v$.form.email.$error" class="text-red-500">
                    {{ v$.form.email.$errors[0].$message }}
                </small>
            </div>
            <div>
                <label
                    for="password"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                    Password
                </label>
                <input
                    v-model="form.password"
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                <small v-if="v$.form.password.$error" class="text-red-500">
                    {{ v$.form.password.$errors[0].$message }}
                </small>
            </div>
            <LoginFormButton
                @fired="submitForm"
                :is-pending="isPending"
                :is-disabled="isDisabled"
                text="Login"
                pending-text="Please wait..."
            />
        </div>
    </div>
</template>
