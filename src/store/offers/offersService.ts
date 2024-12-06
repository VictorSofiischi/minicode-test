import { AxiosService } from '../utils/axios'
import { IGetOffersResponse } from './types/api/IGetOfferResponse'
import { IOffer } from './types/IOffer'


class OffersService extends AxiosService {

    async getOffers() {
        const data = await this.httpRequest.get<IOffer[]>('/offers')
        return data.data
    }
}

export const offersService = new OffersService()