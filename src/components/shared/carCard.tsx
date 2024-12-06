import { Dispatch, SetStateAction } from "react"
import { AutoTypes } from "../insuranceForms/forms/types"


type ICarCardProps = {
    handleChange: Dispatch<SetStateAction<AutoTypes | null>>,
    car: AutoTypes,
    selectedCar: AutoTypes | null
}

export const CarCard = ({ handleChange, car, selectedCar }: ICarCardProps) => {

    return (
        <button
            onClick={(event) => {
                event.preventDefault();
                handleChange(car)
            }}
            className={`py-5 px-2 items-center flex flex-col flex-wrap bg-white rounded-md w-48 
                ${selectedCar?.value == car.value ? "ring-[1px] ring-inset ring-[#A40731]" : ""}
                `}
        >
            {car.icon ? (
                <img
                    src={`/car_icons/${car.icon}.svg`}
                    alt={`${car.icon}_icon`}
                    className="self-center w-16"
                />
            ) : null}
            <span className="text-[#1B1918] font-regular mt-2">{car.title}</span>
        </button>
    )
}