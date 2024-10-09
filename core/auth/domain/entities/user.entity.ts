export enum UserRole {
    ADMIN = 'admin',
    EDITOR = 'editor',
    USER = 'user',
}

type UserProps = {
    id: string;
    email: string;
    name: string;
    surname: string;
    isActive: boolean;
    birthDate: Date;
    role: UserRole;
};

export class User {
    constructor(
        public id: string,
        public email: string,
        public name: string,
        public surname: string,
        public isActive: boolean = true,
        public birthDate: Date,
        public role: UserRole,
    ) {}

    static create(props: UserProps): User {
        if (!Object.values(UserRole).includes(props.role)) {
            throw new Error('Invalid role');
        }

        return new User(
            props.id,
            props.email,
            props.name,
            props.surname,
            props.isActive,
            props.birthDate,
            props.role,
        );
    }
}
