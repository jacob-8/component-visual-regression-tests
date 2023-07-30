import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vite'

import UnoCSS from '@unocss/svelte-scoped/vite'
import { transformerDirectives } from 'unocss'

export default defineConfig({
  plugins: [
    UnoCSS({
      injectReset: '@unocss/reset/tailwind.css',
      cssFileTransformers: [transformerDirectives()],
    }),
    sveltekit(),
  ],
  test: {
    include: ['src/**/*.test.ts'],
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./testSetup.ts'],
    css: true,
  },
})
