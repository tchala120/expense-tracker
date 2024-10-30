/// <reference types="vite/client" />
/// <reference types="vite-plugin-pwa/react" />

interface ImportMetaEnv {
  // All ENVs goes here
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}