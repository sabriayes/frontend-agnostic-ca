import { EnvironmentVars } from '@core/common/config/config-service.interface';

export const defaultConfig = (): EnvironmentVars => ({
    port: 3000,
    debugMode: false,
    appVersion: '0.1',
    maxRetryCount: 1,
    apiURL: 'https://localhost',
});
