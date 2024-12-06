export function isDefined<T>(source: T): boolean {
    return source !== null && source !== undefined
}

export function isEmptyString<T>(source: string): boolean {
    return source === ''
}

export function isNullOrEmptyString<T>(source: T): boolean {
    return !isDefined(source) || (typeof source === 'string' && isEmptyString(source))
}

export interface IServiceUrlSettings {
    apiUrlProtocol: string
    apiUrlDomain: string
    apiUrlSubPath?: string
    path?: string
}

export function buildUrl({ apiUrlProtocol, path, apiUrlDomain, apiUrlSubPath }: IServiceUrlSettings) {
    apiUrlProtocol = apiUrlProtocol.toLowerCase() === 'https' ? 'https' : 'http'
    path = isNullOrEmptyString(path) ? '' : `/${path}`
    path = path.replace('//', '/')
    apiUrlSubPath = isNullOrEmptyString(apiUrlSubPath) ? '' : `/${apiUrlSubPath}`
    apiUrlSubPath = apiUrlSubPath.replace('//', '/')
    const url = `${apiUrlProtocol}://${apiUrlDomain}${path}${apiUrlSubPath}`
    return url
}