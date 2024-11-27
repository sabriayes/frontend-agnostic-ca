import { describe, test, expect } from 'vitest';
import { ConfigService } from '@core/common/config';

describe('Config Service', () => {

    test('should get default configuration', () => {
        const configService = new ConfigService();
        expect(configService.getVariables()).toMatchObject({
            port: 3000,
            debugMode: false,
            appVersion: '0.1',
            maxRetryCount: 1,
            apiURL: 'https://localhost',
        });
    });

    describe('when set environment variables', () => {
        const configService = new ConfigService();

        const newConfig = {
            port: 4000,
            debugMode: true,
            appVersion: '1.0',
            maxRetryCount: 2,
            apiURL: 'https://localhost:4000',
        } as const;

        configService.setVariables(newConfig);

        test('should get new configuration', () => {
            expect(configService.getVariables()).toMatchObject(newConfig);
        });

        test('should get new config with key', () => {
            expect(configService.get('port')).toBe(newConfig.port);
        });

        test('should get new config after update', () => {
            configService.set('port', 5000);
            expect(configService.get('port')).toBe(5000);
        });
    });

});
