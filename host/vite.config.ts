import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'app',
      remotes: [{
        remoteApp: {
          external: `Promise.resolve(window.remoteUrl + '/remoteEntry.js')`,
          externalType: 'promise',
          from: 'vite'
        }
      }],
    })
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false
  }
})
