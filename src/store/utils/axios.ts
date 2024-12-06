import { AxiosInstance } from 'axios'
import { axiosMockInstance } from '@/@fake-db/axios/mock'

class AxiosService {
    static httpRequest: AxiosInstance
    public httpRequest: AxiosInstance

    constructor() {
        const axiosInstance = axiosMockInstance.create()

        this.httpRequest = axiosInstance
        AxiosService.httpRequest = this.httpRequest
    }
}

export { AxiosService }
