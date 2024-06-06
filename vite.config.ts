import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import AutoImport from 'unplugin-auto-import/vite';
import path from 'path';

export default defineConfig({
  plugins: [
    vue(),
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
      symbolId: 'icon-[dir]-[name]',
    }),
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        'pinia',
        {
          'naive-ui': [
            'useDialog',
            'useLoadingBar',
            'useMessage',
            'useNotification'
          ],
          '@tanstack/vue-query': [
            'useMutation',
            'useQuery'
          ]
        }
      ],
      dts: 'src/auto-imports.d.ts', // 自動生成的 d.ts 文件路徑
      eslintrc: {
        enabled: true, // 生成eslint配置
        filepath: './.eslintrc-auto-import.json', // 生成的eslint配置文件路徑
        globalsPropValue: true
      }
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
});
