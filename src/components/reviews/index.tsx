import { RootState, useAppDispatch } from "@/store";
import { fetchReviews } from "@/store/reviews/middleware/fetchReviews";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import ReviewCard from "../shared/reviewCard";
import PageChanger from "../shared/pageChanger";

export default function Reviews() {
    const reviews = useSelector((state: RootState) => state.reviews.reviews)
    const currentPage = useSelector((state: RootState) => state.reviews.currentPage)
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchReviews());
    }, [])

    if (!reviews) {
        return null;
    }

    return (
        <div className="flex flex-col w-full max-w-[1300px] gap-5 mx-auto mb-24 px-5">
            <div className="self-start mt-24">
                <span className="text-[#1B1918] font-bold text-3xl">Recenziile clientilor</span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                {reviews.slice(currentPage * 4, (currentPage * 4) + 4).map(review => <ReviewCard {...review} key={review.id} />)}
            </div>
            <PageChanger currentPage={currentPage} />
        </div>
    )
}