/*
 * @Author: your name
 * @Date: 2020-11-06 13:44:33
 * @LastEditTime: 2020-11-06 17:25:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3-study\src\vuex\index.ts
 */
import { App } from 'vue'
import { createStore } from 'vuex'
import { config } from 'vuex-module-decorators'

config.rawError = true
const store = createStore({ modules: {}, strict: true })

export function uninstallModule(name: string) {
    if (!name) return
    store.hasModule(name) && store.unregisterModule(name)
}

export function setupStore(app: App) {
    app.use(store)
}

export default store