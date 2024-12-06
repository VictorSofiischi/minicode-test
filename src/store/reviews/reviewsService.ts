import { AxiosService } from '../utils/axios'
import { IReview } from './types/IReview'


class ReviewsService extends AxiosService {

    async getReviews() {
        const data = await this.httpRequest.get<IReview[]>('/reviews')
        return data.data
    }
}

export const reviewsService = new ReviewsService()