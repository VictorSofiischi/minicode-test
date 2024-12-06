import { StepsStatus, StepStatus } from "./types";


export const defaultGreenCardStepValue: StepStatus[] = [
    {
        index: 1,
        status: StepsStatus.CURRENT
    },
    {
        index: 2,
        status: StepsStatus.UPCOMMING
    },
    {
        index: 3,
        status: StepsStatus.UPCOMMING
    },
]

export const defaultRCACardStepValue: StepStatus[] = [
    {
        index: 1,
        status: StepsStatus.CURRENT
    },
    {
        index: 2,
        status: StepsStatus.UPCOMMING
    },
    {
        index: 3,
        status: StepsStatus.UPCOMMING
    },
    {
        index: 4,
        status: StepsStatus.UPCOMMING
    },
]