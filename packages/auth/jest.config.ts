import { Config } from 'jest';

const config: Config = {
    rootDir: __dirname,
    preset: 'ts-jest',
    verbose: true,
    testEnvironment: 'node',
    moduleFileExtensions: ['ts', 'js'],
    transform: {
        '^.+\\.ts?$': 'ts-jest',
    },
    testMatch: ['<rootDir>/**/__tests__/**/*.spec.ts'],
    moduleNameMapper: {
        '^@core/auth/(.*)$': '<rootDir>/src/$1',
    },
    transformIgnorePatterns: ['/packages/(?!(common))/'],
};

export default config;
