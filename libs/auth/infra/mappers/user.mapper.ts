import { User, UserRole } from '@libs/common/domain/entities';
import { UserResDTO } from '@libs/auth/infra/dto';

export function mapToUser(response: UserResDTO): User {
    const {
        id,
        email,
        name,
        surname,
        is_active,
        birth_date,
        role,
    } = response;

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
