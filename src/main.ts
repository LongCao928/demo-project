import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

import App from './App.vue'
import router from './router'

import './assets/main.css'
// import { useInputDataStore } from './stores/inputData'

const app = createApp(App)

app.use(createPinia())
// useInputDataStore()
app.use(router)

app.use(ElementPlus, {
  locale: zhCn
})

app.mount('#app')
