import { IOffer } from '@/store/offers/types/IOffer';
import { getLocalStorageItem } from '../axios/utils/getLocalStorageItem';
import { setLocalStorageItem } from '../axios/utils/setLocalStorageItem';

//Static imports
import dbOffers from './resources/db-offers.json'
import dbReviews from './resources/db-reviews.json'
import { IReview } from '@/store/reviews/types/IReview';

const dbOffersKey = "db-offer-key";
const dbReviewsKey = "db-reviews-key";

class DataContext {


    #initialize() {
        setLocalStorageItem(dbOffersKey, dbOffers, false);
        setLocalStorageItem(dbReviewsKey, dbReviews, false);
    }

    getOffers() {
        this.#initialize();
        const offers = getLocalStorageItem(dbOffersKey, true) as IOffer[]

        return offers;
    }

    getReviews() {
        this.#initialize();
        const reviews = getLocalStorageItem(dbReviewsKey, true) as IReview[]

        return reviews;
    }
}

let lazyInstance: DataContext | null = null

function getDataContext() {
    if (lazyInstance === null) {
        lazyInstance = new DataContext()
    }

    return lazyInstance
}

export { getDataContext }