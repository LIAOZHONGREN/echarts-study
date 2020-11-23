/*
 * @Author: your name
 * @Date: 2020-11-09 14:52:18
 * @LastEditTime: 2020-11-09 20:37:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3-study\src\types\global.d.ts
 */
declare interface Fn<T = any> { (...arg: T[]): T }

declare type Nullable<T> = T | null;