import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import LoginFormAvatar, { PropsType } from '@/components/LoginFormAvatar.vue';

describe('LoginFormAvatar.vue', () => {

    const NAME = 'JON DOE';
    const CHARS = 'jd';
    const JOIN_DATE = new Date('2024-11-20');

    const createComp = (props: PropsType) => mount(LoginFormAvatar, {
        props: {
            name: NAME,
            chars: CHARS,
            joinDate: JOIN_DATE,
            ...props,
        },
    });

    it('should renders the avatar initials in uppercase', () => {
        const wrapper = createComp();

        const chars = wrapper.find('[data-testid="avatar-initials"]');
        expect(chars.text()).toBe(CHARS.toUpperCase());
    });

    it('should renders the avatar initials when pass empty [chars]', () => {
        const wrapper = createComp({ chars: '' });

        const chars = wrapper.find('[data-testid="avatar-initials"]');
        expect(chars.text()).toBe(CHARS.toUpperCase());
    });

    it('should renders the single avatar initials when pass single [name]', () => {
        const partOfName = NAME.split(' ')[0];
        const wrapper = createComp({
            name: partOfName,
            chars: '',
        });

        const chars = wrapper.find('[data-testid="avatar-initials"]');
        expect(chars.text()).toBe(partOfName[0]);
    });

    it('should renders the name correctly', () => {
        const wrapper = createComp();

        const name = wrapper.find('[data-testid="avatar-name"]');
        expect(name.text()).toBe(NAME);
    });

    it('should renders the join date correctly', () => {
        const wrapper = createComp();

        const joinDate = wrapper.find('[data-testid="avatar-join-date"]');
        expect(joinDate.text()).toContain('Nov 20');
    });
});
