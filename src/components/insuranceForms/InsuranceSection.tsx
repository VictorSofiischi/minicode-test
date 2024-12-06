import { StepsStatus, StepStatus } from "@/store/insurance/types";
import VerticalStepper from "../shared/verticalStepper";
import { Form } from "./forms/Form";
import { SelectInsuranceTabs } from "./SelectInsuranceTabs";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import VerticalMenu from "../shared/verticalMenu";


export default function InsuranceSection() {

    const selectedCategory = useSelector((state: RootState) => state.insurance.selectedTab)
    const stepsArray = useSelector((state: RootState) => {
        switch (selectedCategory?.id) {
            case 1:
                return state.insurance.greenCardStepStatus
            case 2:
                return state.insurance.RCACardStepStatus
            case 3:
                return state.insurance.greenCardStepStatus
            case 4:
                return state.insurance.RCACardStepStatus
            case 5:
                return state.insurance.greenCardStepStatus
            case 6:
                return state.insurance.RCACardStepStatus
            case 7:
                return state.insurance.greenCardStepStatus
            default:
                return [];
        }
    })

    return (
        <div className="bg-[#F9F9F9] w-full flex flex-row">
            <div>
                <VerticalMenu />
            </div>
            <div className="mx-auto max-w-[1300px] px-5 lg:px-0 mb-24">
                <SelectInsuranceTabs />
                <Form />
            </div>
            <div>
                <VerticalStepper stepsArray={stepsArray} />
            </div>
        </div>
    )
}