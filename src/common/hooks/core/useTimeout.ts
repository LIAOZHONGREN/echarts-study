/*
 * @Author: your name
 * @Date: 2020-11-09 14:47:19
 * @LastEditTime: 2020-11-09 21:46:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3-study\src\common\hooks\core\useTimeout.ts
 */

import { onUnmounted } from 'vue'
export type TimeoutFnRes = [Fn<void>, Fn<void>]

export function useTimeout(handle: () => void, wait: number = 0): TimeoutFnRes {

    let timeout: number | null = null

    function clear() {
        !!timeout && clearTimeout(timeout)
    }

    function open() {
        clear()
        timeout = setTimeout(handle, wait)
    }

    onUnmounted(clear)

    open()

    return [clear, open]

}