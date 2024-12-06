import { useState } from "react"
import { AutoTypes } from "../types"
import { CarCard } from "@/components/shared/carCard";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { typeArray, valabilityArray } from "./constants";


export const GreenCardForm = () => {
    const currentStep = useSelector((state: RootState) => state.insurance.currentStep)
    const [selectedType, setSelectedType] = useState<AutoTypes | null>(null);
    const [selectedValability, setSelectedValability] = useState<AutoTypes | null>(null);
    const [selectedZone, setSelectedZone] = useState<"ua/bl" | "ua/bl/ru" | "eu" | null>(null);

    return (
        <form className="">
            <div className={`flex flex-col mx-auto ${currentStep != 0 ? 'hidden' : ''}`}>
                <span className="text-[#1B1918] mt-5 font-bold text-4xl">Alege tipul autovehiculului</span>
                <div className={`flex flex-row flex-wrap gap-5 mt-6`}>
                    {typeArray.map((item) => (
                        <CarCard handleChange={setSelectedType} car={item} key={item.value} selectedCar={selectedType} />
                    ))}
                </div>
            </div>
            <div className={`flex flex-col mx-auto ${currentStep != 1 ? 'hidden' : ''}`}>
                <span className="text-[#1B1918] mt-5 font-bold text-4xl">Zona de deplasare</span>
                <div className="mt-6 space-y-6">
                    <span className="block text-md font-medium text-gray-900 mb-6">Zona de deplasare</span>
                    <div className="flex items-center">
                        <input
                            id={'ua-bl'}
                            name="selectedZoneEnabled"
                            type="radio"
                            onClick={() => { setSelectedZone('ua/bl') }}
                            className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-[#00834B] checked:bg-[#00834B] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00834B] disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden"
                        />
                        <label htmlFor={'ua/bl'} className="ml-3 block text-sm/6 font-medium text-gray-900">
                            Ucraina, Belarus
                        </label>
                    </div>
                    <div className="flex items-center">
                        <input
                            id={'ua'}
                            name="selectedZoneEnabled"
                            type="radio"
                            onClick={() => { setSelectedZone('ua/bl/ru') }}
                            className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-[#00834B] checked:bg-[#00834B] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00834B] disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden"
                        />
                        <label htmlFor={'ua/bl/ru'} className="ml-3 block text-sm/6 font-medium text-gray-900">
                            Ucraina, Belarus, Federatia Rusa
                        </label>
                    </div>
                    <div className="flex items-center">
                        <input
                            id={'ua'}
                            name="selectedZoneEnabled"
                            type="radio"
                            onClick={() => { setSelectedZone('eu') }}
                            className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-[#00834B] checked:bg-[#00834B] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00834B] disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden"
                        />
                        <label htmlFor={'eu'} className="ml-3 block text-sm/6 font-medium text-gray-900">
                            Tarile membre ale sistemului Carte Verde, Europa
                        </label>
                    </div>
                </div>
                <div>
                    <span className="block text-md font-medium text-gray-900 mt-6 mb-6">Valabilitatea poliței</span>
                    <div className="grid grid-cols-10">
                        {valabilityArray.map((item) => (
                            <div className="flex flex-col items-center" key={item.value}>
                                <input
                                    name="SelectedValability"
                                    type="radio"
                                    onClick={() => { setSelectedValability(item) }}
                                    className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-[#00834B] checked:bg-[#00834B] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00834B] disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden"
                                />
                                <span className="ml-3 block text-sm/6 font-medium text-gray-900">{item.title}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className={`flex flex-col mx-auto ${currentStep != 2 ? 'hidden' : ''}`}>
                <span className="text-[#1B1918] mt-5 font-bold text-4xl">Zona de deplasare</span>
                <div className="mt-6 space-y-6">
                    <span className="block text-md font-medium text-gray-900 mb-6">Zona de deplasare</span>
                    <div className="flex items-center">
                        <input
                            id={'ua-bl'}
                            checked={selectedZone == 'ua/bl'}
                            name="selectedZone"
                            type="radio"
                            disabled
                            className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-[#00834B] checked:bg-[#00834B] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00834B] disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden"
                        />
                        <label htmlFor={'ua/bl'} className="ml-3 block text-sm/6 font-medium text-gray-900">
                            Ucraina, Belarus
                        </label>
                    </div>
                    <div className="flex items-center">
                        <input
                            id={'ua'}
                            checked={selectedZone == 'ua/bl/ru'}
                            name="selectedZone"
                            type="radio"
                            disabled
                            className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-[#00834B] checked:bg-[#00834B] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00834B] disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden"
                        />
                        <label htmlFor={'ua/bl/ru'} className="ml-3 block text-sm/6 font-medium text-gray-900">
                            Ucraina, Belarus, Federatia Rusa
                        </label>
                    </div>
                    <div className="flex items-center">
                        <input
                            id={'eu'}
                            checked={selectedZone == 'eu'}
                            name="selectedZone"
                            type="radio"
                            disabled
                            className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-[#00834B] checked:bg-[#00834B] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00834B] disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden"
                        />
                        <label htmlFor={'eu'} className="ml-3 block text-sm/6 font-medium text-gray-900">
                            Tarile membre ale sistemului Carte Verde, Europa
                        </label>
                    </div>
                </div>
                <div>
                    <span className="block text-md font-medium text-gray-900 mt-6 mb-6">Valabilitatea poliței</span>
                    <div className="grid grid-cols-10">
                        {valabilityArray.map((item) => (
                            <div className="flex flex-col items-center" key={item.value}>
                                <input
                                    checked={item.value == selectedValability?.value}
                                    disabled
                                    name="selectedValability"
                                    type="radio"
                                    className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-[#00834B] checked:bg-[#00834B] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00834B] disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden"
                                />
                                <span className="ml-3 block text-sm/6 font-medium text-gray-900">{item.title}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mt-10 flex flex-row items-center gap-3">
                    <span className="text-4xl font-bold text-[#1B1918]">153 <span className="text-xl">$</span></span>
                    <span className="text-4xl font-bold text-[#1B1918]">{' + '}</span>
                    <img
                        src="icons/freeDelivery.svg"
                        className="w-9"
                    />
                    <span className="text-[#1B1918] text-xl font-light">Livrare gratuită</span>
                </div>
            </div>
        </form>
    )
}