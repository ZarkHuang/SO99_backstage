import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'virtual:svg-icons-register'
import { createPinia } from 'pinia'
import { vueQueryPluginOptions } from '@/libs/vue-query'
import '@/assets/styles/themes.css'
import '@/assets/styles/global.css'
import '@/styles/index.module.css'

const app = createApp(App)

import naive from 'naive-ui'
// 通用字體
import 'vfonts/Lato.css'
// 等寬字體
import 'vfonts/FiraCode.css'

app.use(naive)
app.use(createPinia())
app.use(router)
app.use(vueQueryPluginOptions)
app.mount('#app')
