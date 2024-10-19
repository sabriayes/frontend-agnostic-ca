import {
    InvalidEmailException,
    InvalidRoleException,
} from '@core/common/domain/exceptions';
import { isEmail, isRole } from '@core/common/validators';

export enum UserRole {
    ADMIN = 'admin',
    EDITOR = 'editor',
    MEMBER = 'member',
}

type UserConstructorArgs = {
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
        private _id: string,
        private _email: string,
        private _name: string,
        private _surname: string,
        private _isActive: boolean = true,
        private _birthDate: Date,
        private _role: UserRole,
    ) {
    }

    static create(args: UserConstructorArgs): User {
        if (!isEmail(args.email)) {
            throw new InvalidEmailException();
        }

        if (!isRole(args.role, UserRole)) {
            throw new InvalidRoleException();
        }

        return new User(
            args.id,
            args.email,
            args.name,
            args.surname,
            args.isActive,
            args.birthDate,
            args.role,
        );
    }

    setActive() {
        this._isActive = true;
    }

    setPassive() {
        this._isActive = false;
    }
}
