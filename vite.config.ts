import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    test: {
        browser: {
            enabled: true,
            name: 'chromium',
            provider: 'playwright',
        },

        environment: 'jsdom',
        globals: true,
        setupFiles: './setupTest.ts',
    },
    css: {
        preprocessorOptions: {
            scss: {
                api: 'modern-compiler',
            },
        },
        modules: {
            generateScopedName: '[local]-[hash:base64:5]',
            localsConvention: 'dashes',
            scopeBehaviour: 'local',
        },
    },
    resolve: {
        alias: {
            '@app': resolve(__dirname, 'src/app'),
            '@pages': resolve(__dirname, 'src/pages'),
            '@widgets': resolve(__dirname, 'src/widgets'),
            '@features': resolve(__dirname, 'src/features'),
            '@entities': resolve(__dirname, 'src/entities'),
            '@shared': resolve(__dirname, 'src/shared'),
        },
    },
});
