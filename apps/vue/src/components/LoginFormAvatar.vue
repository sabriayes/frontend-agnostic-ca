<script setup lang="ts">
type PropsType = {
    nane: string,
    chars: string,
    joinDate: string,
};

const props = defineProps<PropsType>();
</script>

<template>
    <div class="flex items-center gap-4">
        <div class="relative
                    inline-flex
                    items-center
                    justify-center
                    w-12
                    h-12
                    overflow-hidden
                    bg-gray-100
                    rounded-full
                    dark:bg-gray-600">
            <span class="font-medium text-gray-600 dark:text-gray-300">
                {{ props.chars.toLocaleUpperCase() }}
            </span>
        </div>
        <div class="font-medium dark:text-white">
            <div>{{ props.name }}</div>
            <div class="text-sm
                        text-gray-500
                        dark:text-gray-400">
                Joined in {{ props.joinDate }}
            </div>
        </div>
    </div>
</template>
