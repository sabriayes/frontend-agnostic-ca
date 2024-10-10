import { Config } from 'jest';

const config: Config = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    verbose: true,
    moduleFileExtensions: ['ts', 'js'],
    testMatch: ['**/tests/**/*.spec.ts'],
    testPathIgnorePatterns: ['node_modules'],
    transform: {
        '^.+\\.ts?$': 'ts-jest',
    },
    moduleNameMapper: {
        '^@common/(.*)$': '<rootDir>/common/$1',
        '^@auth/(.*)$': '<rootDir>/auth/$1',
    },
};

export default config;
