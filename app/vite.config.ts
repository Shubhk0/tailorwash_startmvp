import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import remix from "@remix-run/dev/vite";

export default defineConfig({
  plugins: [
    remix(),
    react(),
    tsconfigPaths(),
  ],
});
```
