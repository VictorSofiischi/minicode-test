export function getLocalStorageItem(key: string, parse = false) {
    if (typeof window === 'undefined') {
        return null
    }

    const value = window.localStorage.getItem(key)
    if (parse) {
        return value ? JSON.parse(value) : null
    }

    return value
}
