import { defineConfig } from 'astro/config';

// 部署在子路徑時，把 base 改成該路徑，例如 '/portfolio/'
export default defineConfig({
  base: '/',
});
