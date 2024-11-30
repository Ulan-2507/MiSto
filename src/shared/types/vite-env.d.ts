/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

declare namespace NodeJS {
    interface ProcessEnv {
        NODE_ENV: 'development' | 'production' | 'test';
        readonly IS_E2E: 'true' | undefined;
    }
}

interface ImportMetaEnv {
    VITE_API: string;
}
