import { defineConfig } from 'vite';
import lessToJS from 'less-vars-to-js';
import reactRefresh from '@vitejs/plugin-react-refresh';
import vitePluginImp from 'vite-plugin-imp';
import path from 'path';
import fs from 'fs';
import config from './config';

const themeVariables = lessToJS(
  fs.readFileSync(path.resolve(__dirname, './config/variables.less'), 'utf8'),
);

// https://vitejs.dev/config/
export default defineConfig({
  base: config.cdn,
  plugins: [
    reactRefresh(),
    vitePluginImp({
      libList: [
        {
          libName: 'antd',
          style: (name) => `antd/lib/${name}/style/index.less`,
        },
      ],
    }),
  ],
  css: {
    preprocessorOptions: {
      less: {
        // 支持内联 JavaScript
        javascriptEnabled: true,
        // 重写 less 变量，定制样式
        modifyVars: themeVariables,
      },
    },
  },
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:3001',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '~/public': path.resolve(__dirname, 'public'),
    },
  },
});
