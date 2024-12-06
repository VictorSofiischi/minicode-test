import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IInsuranceState, StepsStatus } from './types'
import { InsuranceTab } from "@/components/insuranceForms/SelectInsuranceTabs";
import { defaultGreenCardStepValue, defaultRCACardStepValue } from './defaultValues';

const initialState: IInsuranceState = {
    selectedTab: {
        id: 1,
        value: 'Carte Verde'
    },
    currentStep: 0,
    greenCardStepStatus: defaultGreenCardStepValue,
    RCACardStepStatus: defaultRCACardStepValue

}

const insuranceSlice = createSlice({
    name: 'insurance',
    initialState,
    reducers: {
        handleChangeInsuranceTab: (state, action: PayloadAction<{ tab: InsuranceTab }>) => {
            const { tab } = action.payload

            state.selectedTab = tab;
            state.currentStep = 0;

            state.greenCardStepStatus = defaultGreenCardStepValue;
            state.RCACardStepStatus = defaultRCACardStepValue

            return state;
        },
        handleStepForward: (state, action: PayloadAction<{ selectedTabId: number }>) => {
            const { selectedTabId } = action.payload

            state.currentStep = state.currentStep + 1;
            switch (selectedTabId) {
                case 1:
                    state.greenCardStepStatus[state.currentStep - 1] = {
                        ...state.greenCardStepStatus[state.currentStep - 1],
                        status: StepsStatus.COMPLETED
                    }
                    state.greenCardStepStatus[state.currentStep] = {
                        ...state.greenCardStepStatus[state.currentStep],
                        status: StepsStatus.CURRENT
                    }
                case 2:
                case 1:
                    state.RCACardStepStatus[state.currentStep - 1] = {
                        ...state.RCACardStepStatus[state.currentStep - 1],
                        status: StepsStatus.COMPLETED
                    }
                    state.RCACardStepStatus[state.currentStep] = {
                        ...state.RCACardStepStatus[state.currentStep],
                        status: StepsStatus.CURRENT
                    }
                default:
            }

            return state;
        },
        handleStepBack: (state, action: PayloadAction<{ selectedTabId: number }>) => {
            const { selectedTabId } = action.payload

            state.currentStep = state.currentStep - 1;
            switch (selectedTabId) {
                case 1:
                    state.greenCardStepStatus[state.currentStep] = {
                        ...state.greenCardStepStatus[state.currentStep],
                        status: StepsStatus.CURRENT
                    }
                    state.greenCardStepStatus[state.currentStep + 1] = {
                        ...state.greenCardStepStatus[state.currentStep + 1],
                        status: StepsStatus.UPCOMMING
                    }
                case 2:
                    state.RCACardStepStatus[state.currentStep] = {
                        ...state.RCACardStepStatus[state.currentStep],
                        status: StepsStatus.CURRENT
                    }
                    state.RCACardStepStatus[state.currentStep + 1] = {
                        ...state.RCACardStepStatus[state.currentStep + 1],
                        status: StepsStatus.UPCOMMING
                    }
                default:
            }

            return state;
        }
    }
})

export const {
    handleChangeInsuranceTab,
    handleStepBack,
    handleStepForward
} = insuranceSlice.actions

export default insuranceSlice.reducer