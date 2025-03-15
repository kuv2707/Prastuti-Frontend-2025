/// <reference types="vite/client" />


interface ImportMetaEnv {
  VITE_API_URL: string;
    VITE_GOOGLE_CLIENT_ID: string;
  readonly VITE_APP_TITLE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}