<script setup lang="ts">
import LoginFormHeader from '@/components/LoginFormHeader.vue';
import LoginFormButton from '@/components/LoginFormButton.vue';
</script>

<template>
    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
        <LoginFormHeader />
        <form class="space-y-4 md:space-y-6">
            <div>
                <label
                    for="email"
                    class=" block
                            mb-2
                            text-sm
                            font-medium
                            text-gray-900
                            dark:text-white">
                    Email
                </label>
                <input
                    required
                    type="email"
                    name="email"
                    id="email"
                    placeholder="mail@domain.com"
                    class=" bg-gray-50
                            border
                            border-gray-300
                            text-gray-900
                            rounded-lg
                            focus:ring-blue-600
                            focus:border-blue-600
                            block
                            w-full
                            p-2.5
                            dark:bg-gray-700
                            dark:border-gray-600
                            dark:placeholder-gray-400
                            dark:text-white
                            dark:focus:ring-blue-500
                            dark:focus:border-blue-500" />
            </div>
            <div>
                <label
                    for="password"
                    class=" block
                            mb-2
                            text-sm
                            font-medium
                            text-gray-900
                            dark:text-white">
                    Password
                </label>
                <input
                    required
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    class=" bg-gray-50
                            border
                            border-gray-300
                            text-gray-900
                            rounded-lg
                            focus:ring-blue-600
                            focus:border-blue-600
                            block
                            w-full
                            p-2.5
                            dark:bg-gray-700
                            dark:border-gray-600
                            dark:placeholder-gray-400
                            dark:text-white
                            dark:focus:ring-blue-500
                            dark:focus:border-blue-500" />
            </div>
            <LoginFormButton :disabled="true" :loading="false" />
        </form>
    </div>
</template>
