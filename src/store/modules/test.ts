/*
 * @Author: your name
 * @Date: 2020-11-06 14:01:33
 * @LastEditTime: 2020-11-06 19:21:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3-study\src\vuex\modules\test.ts
 */
import { VuexModule, Module, Mutation, Action, getModule } from 'vuex-module-decorators'
import store, { uninstallModule } from '../index'

const name = 'test'

uninstallModule(name)

@Module({ dynamic: true, name: name, store, namespaced: true })
class Test extends VuexModule {

    private text = 'hello world!'

    @Mutation
    public setText(newT: string) {
        this.text = newT
    }

    get getText(): string {
        return this.text
    }

    @Action
    public updateText(newT: string): string {
        this.setText(newT)
        return this.text
    }

}

export const testStore = getModule<Test>(Test)