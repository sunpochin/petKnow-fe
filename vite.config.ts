import { fileURLToPath, URL } from 'node:url'

import { defineConfig,loadEnv,splitVendorChunkPlugin } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import path from 'path'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    splitVendorChunkPlugin(),
    vue(),
    Components({
    dirs: [ 'src/components' ], // 指定components位置 預設是'src/components'
    dts: 'src/types/components.d.ts', // .d.ts生成位置
    resolvers: [ NaiveUiResolver() ] // 解析規則
 })],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      // '@': fileURLToPath(new URL('./src', import.meta.url)),
      '/images': 'src/assets/images',
    }
  },
  build: {
    rollupOptions: {
      external: ['swiper/css','swiper/vue'],
    },
  },
  // server: {
  //   proxy: {
  //     '/api': {
  //       target: loadEnv('', process.cwd()).VITE_API_URL,
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/api/, '')
  //     },
  //   }
  // }
})
