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
})
