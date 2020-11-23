/*
 * @Author: your name
 * @Date: 2020-11-09 16:50:01
 * @LastEditTime: 2020-11-09 17:08:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3-study\src\common\hooks\core\useThrottle.ts
 */

export type ThrottleProcedure<T extends unknown[]> = (...args: T) => unknown;

//给事件函数安装节流功能
export function useThrottle<T extends unknown[]>(handle: (...args: T) => unknown, wait: number): ThrottleProcedure<T> {

    let time = Date.now()
    function fn(this: unknown, ...args: T) {
        const currect = Date.now()
        if (currect - time >= wait) {
            handle.apply(this, args)
            time = currect
        }
    }
    return fn
}