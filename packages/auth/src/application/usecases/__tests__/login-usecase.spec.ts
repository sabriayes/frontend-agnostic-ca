import { container } from '@core/auth/inversify.config';
import { ILoginUseCase } from '@core/auth/application/ports';
import { Session } from '@packages/common';

describe('Login Usecase', () => {
    it('should run successfuly', async () => {
        const loginUsecase = container.get<ILoginUseCase>('ILoginUseCase');
        const res = await loginUsecase.execute({
            email: 'test@gmail.com',
            password: 'Str0ng!*123',
        });
        expect(res).toBeInstanceOf(Session);
    });
});
