<script setup lang="ts">
import { computed } from 'vue';
import { getInitials, formatJoinDate } from '@/utils';

export type PropsType = {
    name: string,
    joinDate: Date,
    chars?: string,
};

const props = defineProps<PropsType>();

const formattedDate = computed(() => formatJoinDate(props.joinDate));

const formattedChars = computed(() => {
    return !props.chars
        ? getInitials(props.name)
        : props.chars.toLocaleUpperCase();
});
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
            <span aria-hidden="true"
                  class="font-medium text-gray-600 dark:text-gray-300"
                  data-testid="avatar-initials">
                {{ formattedChars }}
            </span>
        </div>
        <div class="font-medium dark:text-white">
            <div aria-label="Name"
                 data-testid="avatar-name">
                {{ props.name }}
            </div>
            <div aria-label="Join date"
                 data-testid="avatar-join-date"
                 class="text-sm text-gray-500 dark:text-gray-400">
                Joined in {{ formattedDate }}
            </div>
        </div>
    </div>
</template>
