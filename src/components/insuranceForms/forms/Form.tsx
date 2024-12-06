import { RootState, useAppDispatch } from "@/store"
import { useSelector } from "react-redux"
import { GreenCardForm } from "./GreenCard/GreencardForm"
import { GreenCardInfo } from "./GreenCard/GreenCardInfo"
import ArrowLeftIcon from "@/components/svg/ArrowLeft"
import ArrowRightIcon from "@/components/svg/ArrowRight"
import { handleStepBack, handleStepForward } from '@/store/insurance/insuranceSlice';
import { toast } from "react-toastify"
import { RCACardInfo } from "./RCAForm/RCACardInfo"
import { RCAForm } from "./RCAForm/RCAForm"


export const Form = () => {
    const selectedTab = useSelector((state: RootState) => state.insurance.selectedTab)
    const stepsArray = useSelector((state: RootState) => {
        switch (selectedTab?.id) {
            case 1:
                return state.insurance.greenCardStepStatus
            case 2:
                return state.insurance.RCACardStepStatus
            default:
                return [];
        }
    })
    const currentStep = useSelector((state: RootState) => {
        return state.insurance.currentStep
    })
    const dispatch = useAppDispatch();

    const getTabForm = () => {
        switch (selectedTab?.id) {
            case 1:
                return <GreenCardForm />
            case 2:
                return <RCAForm />
            case 3:
                return <GreenCardForm />
            case 4:
                return <RCAForm />
            case 5:
                return <GreenCardForm />
            case 6:
                return <RCAForm />
            case 7:
                return <GreenCardForm />
            default:
                return null;
        }
    }

    const getInfo = () => {
        switch (selectedTab?.id) {
            case 1:
                return <GreenCardInfo />
            case 2:
                return <RCACardInfo />
            case 3:
                return <GreenCardInfo />
            case 4:
                return <RCACardInfo />
            case 5:
                return <GreenCardInfo />
            case 6:
                return <RCACardInfo />
            case 7:
                return <GreenCardInfo />
            default:
                return null;
        }
    }

    const handleGoBack = () => {
        dispatch(handleStepBack({ selectedTabId: selectedTab!.id }));
    }

    const handleGoForward = () => {
        dispatch(handleStepForward({ selectedTabId: selectedTab!.id }));
    }

    const handlePay = () => {
        toast.success("Comandat si platit cu success");
    }

    return (
        <div className="flex flex-col xl:flex-row">
            <div className="flex flex-col w-full">
                <div className="min-h-[350px] lg:min-w-[650px]">
                    {getTabForm()}
                </div>
                <div className="flex flex-row justify-between mt-16">
                    <button
                        disabled={currentStep == 0}
                        onClick={handleGoBack}
                        className={`flex flex-row items-center gap-5 py-2 px-5 ${currentStep == 0 ? "ring-[1px] ring-inset ring-[#A40731] bg-white" : "bg-[#A40731]"} rounded-md`}>
                        <ArrowLeftIcon color={`${currentStep == 0 ? '#000000' : '#FFFFFF'}`} />
                        <span className={`${currentStep == 0 ? "text-black" : "text-white"} font-semibold`}>Înapoi</span>
                    </button>
                    <button
                        onClick={currentStep == stepsArray.length - 1 ? handlePay : handleGoForward}
                        className={`flex flex-row bg-[#A40731] items-center gap-5 py-2 px-5 rounded-md`}>
                        <span className={`text-white font-semibold`}>{currentStep == stepsArray.length - 2 ? "Vezi Costul" : currentStep == stepsArray.length - 1 ? "Comandă și achită online" : "Înainte"}</span>
                        <ArrowRightIcon color={`#FFFFFF`} />
                    </button>
                </div>
            </div>
            <div className="w-full lg:min-w-[650px]">
                {getInfo()}
            </div>
        </div>
    )
}