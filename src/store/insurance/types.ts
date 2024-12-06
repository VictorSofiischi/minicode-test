import { InsuranceTab } from "@/components/insuranceForms/SelectInsuranceTabs";

export interface IInsuranceState {
    selectedTab: InsuranceTab | null;
    currentStep: number;
    greenCardStepStatus: StepStatus[]
    RCACardStepStatus: StepStatus[]
}

export enum StepsStatus {
    COMPLETED = 1,
    UPCOMMING = 2,
    CURRENT = 3
}

export type StepStatus = {
    index: number,
    status: StepsStatus
}