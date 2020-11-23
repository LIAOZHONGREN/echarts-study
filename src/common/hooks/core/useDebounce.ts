/*
 * @Author: your name
 * @Date: 2020-11-09 16:27:26
 * @LastEditTime: 2020-11-09 21:40:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3-study\src\common\hooks\core\useDebounce.ts
 */


export type DebounceProcedure<T extends unknown[]> = (...args: T) => unknown;
export type DebounceFnRes<T extends unknown[]> = [DebounceProcedure<T>, () => void]

//给事件函数安装防抖功能
export function useDebounce<T extends unknown[]>(handle: (...args: T) => unknown, wait: number): DebounceFnRes<T> {

    let timeout: number | null = null
    let time = Date.now()
    function clear() {
        !!timeout && clearTimeout(timeout)
    }

    function fn(this: unknown, ...args: T) {
        const currectTime = Date.now()
        if (currectTime - time < wait) { clear() }
        time = currectTime
        timeout = setTimeout(() => {
            handle.apply(this, args)
        }, wait)
    }

    return [fn, clear]

}