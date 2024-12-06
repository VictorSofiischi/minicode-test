import { RootState, useAppDispatch } from "@/store";
import { fetchOffers } from "@/store/offers/middleware/fetchOffers";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import OfferCard from "../shared/offerCard";
import ArrowRightIcon from "../svg/ArrowRight";


export default function Offers() {
    const offers = useSelector((state: RootState) => state.offers.offers)

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchOffers());
    }, [])

    if (!offers) {
        return null;
    }

    return (
        <div className="flex flex-col relative w-full">
            <div className="absolute h-full w-full bg-opacity-20 z-0 bg-no-repeat bg-cover"
                style={{ background: 'url("/offers_background.png")', opacity: 0.2 }}
            />
            <div className="z-10 flex flex-col gap-5 mx-auto mb-24">
                <div className="flex flex-row justify-between w-full mt-24">
                    <span className="text-[#1B1918] font-bold text-3xl">Oferte</span>
                    <div className="flex flex-row items-center">
                        <button className="text-[#A40731] font-regular text-lg p-5">Vezi toate ofertele</button>
                        <ArrowRightIcon color="#A40731" />
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row gap-5">
                    {offers.map(offer => (
                        <div key={offer.id}>
                            <OfferCard card={offer} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}