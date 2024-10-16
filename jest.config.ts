import { Config } from 'jest';

const config: Config = {
    preset: 'ts-jest',
    verbose: true,
    testEnvironment: 'node',
    moduleFileExtensions: ['ts', 'js'],
    transform: {
        '^.+\\.ts?$': 'ts-jest',
    },
    projects: [
        {
            preset: 'ts-jest',
            displayName: 'common',
            testMatch: ['<rootDir>/packages/common/**/__tests__/**/*.spec.ts'],
            testPathIgnorePatterns: ['<rootDir>/node_modules/']
        },
    ],
};

export default config;
