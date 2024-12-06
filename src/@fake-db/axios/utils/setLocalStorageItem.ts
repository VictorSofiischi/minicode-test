import { getLocalStorageItem } from './getLocalStorageItem'

export function setLocalStorageItem<T>(key: string, value: T, override = true) {
    if (!override && getLocalStorageItem(key)) {
        return
    }
    let storageValue: any = value
    if (!(value === null || value === undefined || typeof value === 'string' || value instanceof String)) {
        storageValue = JSON.stringify(value)
    }
    window.localStorage.setItem(key, storageValue)
}
