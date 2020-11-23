/*
 * @Author: your name
 * @Date: 2020-11-06 16:20:40
 * @LastEditTime: 2020-11-11 10:37:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3-study\main.ts
 */

import { createApp } from 'vue'
import App from './App'
import { setupStore } from './store/index'

const app = createApp(App)
setupStore(app)
app.mount('#app')