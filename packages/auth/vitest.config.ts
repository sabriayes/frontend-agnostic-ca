import { defineConfig } from 'vitest/config';
import { resolve } from 'path';

export default defineConfig({
    test: {
        globals: true,
        environment: 'node',
        setupFiles: ['./vitest.setup.ts'],
    },
    esbuild: {
    },
    resolve: {
        alias: {
            '@core/auth': resolve(__dirname, './src'),
        },
    },
});
