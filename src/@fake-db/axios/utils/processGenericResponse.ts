export const processGenericResponse = <T, M>(data: T, meta: M, errors: null | any[] = null) => {
    return {
        data: data,
        meta: meta,
        errors: errors
    }
}