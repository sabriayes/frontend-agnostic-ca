<script setup lang="ts">
import LoginForm from '@/components/LoginForm.vue';
</script>

<template>
    <div class="bg-gray-50 dark:bg-gray-900 antialiased">
        <div class="flex
                    flex-col
                    items-center
                    justify-center
                    px-6
                    py-8
                    mx-auto
                    md:h-screen
                    lg:py-0">
            <div class="w-full
                        pb-5
                        bg-white
                        rounded-xl
                        shadow-2xl
                        dark:border
                        md:mt-0
                        sm:max-w-md
                        dark:bg-gray-800
                        dark:border-gray-700">
                <LoginForm />
            </div>
        </div>
    </div>
</template>
