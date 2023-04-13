/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly FIREBASE_API_KEY: string
    readonly FIREBASE_APP_ID: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}