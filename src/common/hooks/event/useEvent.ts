/*
 * @Author: your name
 * @Date: 2020-11-09 17:10:08
 * @LastEditTime: 2020-11-10 11:00:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3-study\src\common\hooks\event\useEvent.ts
 */

import { onUnmounted, ref, Ref, isRef, watch } from 'vue'
import { useThrottle } from '../core/useThrottle'
import { useDebounce } from '../core/useDebounce'

export interface UseEventParams {
    el?: Element | Window | Ref<Element | undefined>
    event: string;
    listener: EventListener;
    options?: boolean | AddEventListenerOptions;
    controlType?: 'debounce' | 'throttle';
    wait?: number;
}

export type RemoveEvent = () => void

export function useEvent({ el = window, event, listener, options, controlType = 'throttle', wait = 80 }: UseEventParams): RemoveEvent {

    if (event === '') throw new Error('event not can null or undefined!')
    const element = isRef(el) ? el : ref<Element>(el as Element)

    const [listener_, clear] = controlType === 'throttle' ? [useThrottle(listener, wait), () => { }] : useDebounce(listener, wait)
    const addEventListener = (el: Element | undefined) => {
        el && el.addEventListener(event, listener_, options)
    }
    const removeEventListener = (el: Element | undefined) => {
        el && el.removeEventListener(event, listener_, options)
        clear()
    }

    const clearW = watch(element, (v, o, clearup) => {
        addEventListener(v)
        clearup(() => {
            removeEventListener(v)
        })
    }, { immediate: true })

    const remove = () => {
        removeEventListener(element.value)
        clearW()
    }

    onUnmounted(remove)

    return remove
}