import { IReview } from "@/store/reviews/types/IReview";

export default function ReviewCard(review: IReview) {
    return (
        <div key={review.id} className="flex flex-row space-x-4 text-sm bg-white rounded-md p-5 min-h-[180px]">
            <div className="self-start pb-10">
                <img
                    alt=""
                    src={review.image}
                    className="w-[96px] h-[96px] object-cover rounded-full bg-gray-100"
                />
            </div>
            <div className="flex-1 w-full lg:max-w-[650px]">
                <h3 className="font-semibold text-xl text-[#42403F]">{review.name}</h3>

                <div className="mt-4 flex items-center gap-2">
                    {[0, 1, 2, 3, 4].map((rating) => {
                        if (rating < review.rating) {
                            return <img src="/icons/fill_star.svg" />;
                        } else {
                            return <img src="/icons/empty_star.svg" />;
                        }
                    })}
                </div>
                <div className="mt-4 text-md font-regular text-[#42403F] break-words">
                    {review.content}
                </div>
            </div>
        </div>

    )
}