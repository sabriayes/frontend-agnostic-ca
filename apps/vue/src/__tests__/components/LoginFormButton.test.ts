import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import LoginFormButton, { PropsType } from '@/components/LoginFormButton.vue';

describe('LoginFormButton.vue', () => {

    const TEXT = 'LOGIN';
    const PENDING_TEXT = 'PLEASE WAIT...';

    const createComp = (props: PropsType) => mount(LoginFormButton, {
        props: {
            text: TEXT,
            ...props,
        },
    });

    it('should render correctly when init', () => {
        const wrapper = createComp();

        const button = wrapper.find('button');
        expect(button.text()).toBe(TEXT);
        expect(button.classes()).toContain('bg-blue-600');

        const icon = button.find('svg');
        expect(icon.exists()).toBe(false);
    });

    it('should handle passive when [isDisabled]', () => {
        const wrapper = createComp({ isDisabled: true });

        const button = wrapper.find('button');
        expect(button.attributes('disabled')).toBe('');
        expect(button.classes()).toContain('cursor-not-allowed');
        expect(button.classes()).toContain('bg-gray-600');

        const icon = button.find('svg');
        expect(icon.exists()).toBe(false);
    });

    it('should change text when [isPending]', () => {
        const wrapper = createComp({
            pendingText: PENDING_TEXT,
            isPending: true,
        });

        const button = wrapper.find('button');
        expect(button.text()).toBe(PENDING_TEXT);

        const icon = button.find('svg');
        expect(icon.exists()).toBe(true);
    });

    it('should show default pending text without [pendingText]', () => {
        const wrapper = createComp({
            isPending: true,
        });
        const button = wrapper.find('button');

        expect(button.text()).toBe('Waiting...');
    });
});
