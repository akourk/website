/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Google Analytics property, injected at build time. Absent in dev. */
  readonly VITE_GA_TRACKING_ID?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
