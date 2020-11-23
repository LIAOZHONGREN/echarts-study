/*
 * @Author: your name
 * @Date: 2020-11-09 14:54:36
 * @LastEditTime: 2020-11-09 14:59:43
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \vue3-study\src\common\utils\vue\tryOnUnmounted.ts
 */
import { onUnmounted, getCurrentInstance } from 'vue'

export function tryOnUnmounted(fn: () => Promise<void> | void) {
    if (getCurrentInstance()) {
        onUnmounted(fn);
    }
}