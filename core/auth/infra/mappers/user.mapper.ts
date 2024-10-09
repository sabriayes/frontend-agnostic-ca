import { AxiosResponse } from 'axios';
import { User, UserRole } from '@auth/domain/entities';
import { UserDTO } from '@auth/infra/dto';

export function mapToUser(response: AxiosResponse<UserDTO>): User {
    const {
        id,
        email,
        name,
        surname,
        is_active,
        birth_date,
        role,
    } = response.data;

    return User.create({
        id,
        email,
        name,
        surname,
        isActive: is_active,
        birthDate: new Date(birth_date),
        role: role as UserRole,
    });
}
