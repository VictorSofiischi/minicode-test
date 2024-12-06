import { useState } from "react"
import { AutoTypes } from "../types"
import { CarCard } from "@/components/shared/carCard";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { localitati, numberAdmissible, personPosessor, stagiu, typeArray } from "./constants";
import CheckBox from "@/components/shared/checkbox";
import Select from "@/components/shared/select";


export const RCAForm = () => {
    const currentStep = useSelector((state: RootState) => state.insurance.currentStep)
    const [selectedType, setSelectedType] = useState<AutoTypes | null>(null);

    return (
        <form className="">
            <div className={`flex flex-col mx-auto ${currentStep != 0 ? 'hidden' : ''}`}>
                <span className="text-[#1B1918] mt-5 font-bold text-4xl">Alege tipul autovehiculului</span>
                <div>
                    <div className="flex flex-row justify-between mt-3 mb-3">
                        <span className="text-[#1B1918] text-md">Autovehicolul este înmatriculat în:</span>
                        <img
                            src="/menu_icons/question.svg"
                            className="w-6"
                        />
                    </div>
                    <CheckBox>
                        <span className="text-[#948E8C] text-md ml-3">Republica Moldova</span>
                    </CheckBox>
                </div>
                <div>
                    <div className="flex flex-row justify-between mt-3 mb-3">
                        <span className="text-[#1B1918] text-md">Posesorul autovehicoluiui este persoană:</span>
                        <img
                            src="/menu_icons/question.svg"
                            className="w-6"
                        />
                    </div>
                    <div className="flex flex-row gap-8">
                        <CheckBox>
                            <span className="text-[#948E8C] text-md ml-3">Fizica</span>
                        </CheckBox>
                        <CheckBox>
                            <span className="text-[#948E8C] text-md ml-3">Juridica</span>
                        </CheckBox>
                    </div>
                </div>
                <div>
                    <div className="flex flex-row justify-between mt-3 mb-3">
                        <span className="text-[#1B1918] text-md">Posesorul autovehicoluiui este persoană:</span>
                        <img
                            src="/menu_icons/question.svg"
                            className="w-6"
                        />
                    </div>
                    <Select options={localitati} />
                </div>
            </div>
            <div className={`flex flex-col mx-auto ${currentStep != 1 ? 'hidden' : ''}`}>
                <span className="text-[#1B1918] mt-5 font-bold text-4xl">Alege tipul autovehiculului</span>
                <div className={`flex flex-row flex-wrap gap-5 mt-6`}>
                    {typeArray.map((item) => (
                        <CarCard handleChange={setSelectedType} car={item} key={item.value} selectedCar={selectedType} />
                    ))}
                </div>
            </div>
            <div className={`flex flex-col mx-auto gap-5 ${currentStep != 2 ? 'hidden' : ''}`}>
                <span className="text-[#1B1918] mt-5 font-bold text-4xl">Numarul de locuri</span>
                <div>
                    <div className="flex flex-row justify-between mt-3 mb-3">
                        <span className="text-[#1B1918] text-md">Posesorul autovehicoluiui este persoană:</span>
                        <img
                            src="/menu_icons/question.svg"
                            className="w-6"
                        />
                    </div>
                    <Select options={personPosessor} placeholder="Selecteaza o optiune" />
                </div>
                <div>
                    <div className="flex flex-row justify-between mt-3 mb-3">
                        <span className="text-[#1B1918] text-md">Numărul persoanelor admise la conducere:</span>
                        <img
                            src="/menu_icons/question.svg"
                            className="w-6"
                        />
                    </div>
                    <Select options={numberAdmissible} placeholder="Selecteaza o optiune" />
                </div>
                <div>
                    <div className="flex flex-row justify-between mt-3 mb-3">
                        <span className="text-[#1B1918] text-md">Stagiul de conducere a posesorului:</span>
                        <img
                            src="/menu_icons/question.svg"
                            className="w-6"
                        />
                    </div>
                    <Select options={stagiu} placeholder="Selecteaza o optiune" />
                </div>
            </div>
            <div className={`flex flex-col mx-auto gap-5 ${currentStep != 3 ? 'hidden' : ''}`}>
                <span className="text-[#1B1918] mt-5 font-bold text-4xl">Numarul de locuri</span>
                <div>
                    <div className="flex flex-row justify-between mt-3 mb-3">
                        <span className="text-[#1B1918] text-md">Posesorul autovehicoluiui este persoană:</span>
                        <img
                            src="/menu_icons/question.svg"
                            className="w-6"
                        />
                    </div>
                    <Select options={personPosessor} placeholder="Selecteaza o optiune" disabled />
                </div>
                <div>
                    <div className="flex flex-row justify-between mt-3 mb-3">
                        <span className="text-[#1B1918] text-md">Numărul persoanelor admise la conducere:</span>
                        <img
                            src="/menu_icons/question.svg"
                            className="w-6"
                        />
                    </div>
                    <Select options={numberAdmissible} placeholder="Selecteaza o optiune" disabled />
                </div>
                <div>
                    <div className="flex flex-row justify-between mt-3 mb-3">
                        <span className="text-[#1B1918] text-md">Stagiul de conducere a posesorului:</span>
                        <img
                            src="/menu_icons/question.svg"
                            className="w-6"
                        />
                    </div>
                    <Select options={stagiu} placeholder="Selecteaza o optiune" disabled />
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