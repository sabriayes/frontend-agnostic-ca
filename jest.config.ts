import { Config } from 'jest';

const config: Config = {
    rootDir: __dirname,
    preset: 'ts-jest',
    testEnvironment: 'node',
    verbose: true,
    moduleFileExtensions: ['ts', 'js'],
    testMatch: ['**/tests/**/*.spec.ts'],
    testPathIgnorePatterns: ['node_modules'],
    projects: ["<rootDir>/libs/*/jest*config.js"],
    transform: {
        '^.+\\.ts?$': 'ts-jest',
    },
    moduleNameMapper: {
        '^@libs/auth/(.*)$': '<rootDir>/src/$1',
    },
};

export default config;
