import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import LoginView from '@/pages/login/login.view';

describe('HomeView Component', () => {
    it('displays "Hello" in h1', () => {
        render(<LoginView />);

        const helloElement = screen.getByRole('heading', { name: /hello/i });
        expect(helloElement).toBeInTheDocument();
    });
});
