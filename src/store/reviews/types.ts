import { IReview } from "./types/IReview";

export interface IReviewState {
    reviews: IReview[],
    currentPage: number
}