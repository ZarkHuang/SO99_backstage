import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'virtual:svg-icons-register'
import { createPinia } from 'pinia'
import { vueQueryPluginOptions } from '@/libs/vue-query'
import '@/assets/styles/themes.css'
import '@/assets/styles/global.css'
import '@/styles/index.module.css'

import naive from 'naive-ui'

const app = createApp(App)

app.config.errorHandler = (err, instance, info) => {
    console.warn('[Vue errorHandler]', err, instance, info)
  }
  
  app.config.warnHandler = (msg, instance, trace) => {
    console.warn('[Vue warnHandler]', msg, instance, trace)
  }

app.use(naive)
app.use(createPinia())
app.use(router)
app.use(vueQueryPluginOptions)
app.mount('#app')
