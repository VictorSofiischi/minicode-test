import { IOffer } from "@/store/offers/types/IOffer"
import ArrowRightIcon from "../svg/ArrowRight"

type IOfferCard = {
    card: IOffer
}


export default function OfferCard({ card }: IOfferCard) {

    return (
        <div className="flex flex-col w-[420px] bg-white rounded-lg">
            <img
                src={card.image}
                alt={`card.id_offer_logo`}
            />
            <span className="text-[#1B1918] font-bold text-2xl mb-10 mt-10 p-5">{card.title}</span>
            <span className="text-[#1B1918] font-regular text-lg mb-10 p-5">{card.description}</span>
            <button className="flex flex-row items-center">
                <span className="text-[#A40731] font-regular text-lg p-5">Vezi mai mult</span>
                <ArrowRightIcon color="#A40731" />
            </button>
        </div>
    )
}