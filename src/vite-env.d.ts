/// <reference types="vite/client" />


interface ImportMetaEnv {
  VITE_API_URL: string
  readonly VITE_APP_TITLE: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}