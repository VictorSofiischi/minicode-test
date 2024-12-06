import { CheckIcon } from '@heroicons/react/20/solid'
import { classNames } from '../utils/classNames'
import { StepsStatus, StepStatus } from '@/store/insurance/types'

type IVerticalStepperProps = {
    stepsArray: StepStatus[]
}

export default function verticalStepper({ stepsArray }: IVerticalStepperProps) {
    const stepHeight = `calc((100% / (${stepsArray.length - 1})) - 32px)`;

    return (
        <nav className='h-full px-6 py-3 bg-white border-l-[1px] border-[#E7E5E4]'>
            <ol role="list" className="overflow-hidden h-full">
                {stepsArray.map((step) => (
                    <li key={step.index} className={classNames(step.index - 1 !== stepsArray.length - 1 ? 'pb-10' : '', 'relative')}
                        style={{ height: step.index == stepsArray.length ? '32px' : stepHeight }}
                    >
                        {step.status === StepsStatus.COMPLETED ? (
                            <>
                                {step.index - 1 !== stepsArray.length - 1 ? (
                                    <div aria-hidden="true" className={`absolute left-4 top-[30%] -ml-px mt-0.5 h-[60%] w-[1px] bg-black`} />
                                ) : null}
                                <span className={`flex h-9 items-center`}>
                                    <span className="relative z-10 flex size-8 items-center justify-center rounded-full bg-[#00834B] group-hover:bg-indigo-800">
                                        <CheckIcon aria-hidden="true" className="size-5 text-white" />
                                    </span>
                                </span>
                            </>
                        ) : step.status === StepsStatus.CURRENT ? (
                            <>
                                {step.index - 1 !== stepsArray.length - 1 ? (
                                    <div aria-hidden="true" className="absolute left-4 top-[30%] -ml-px mt-0.5 h-[60%] w-[1px] bg-gray-300" />
                                ) : null}
                                <span aria-hidden="true" className="flex h-9 items-center">
                                    <span className="relative z-10 flex size-8 items-center justify-center rounded-full border-2 border-[#00834B] bg-white">
                                        <span className="size-2.5 rounded-full bg-[#00834B]" />
                                    </span>
                                </span>
                            </>
                        ) : (
                            <>
                                {step.index - 1 !== stepsArray.length - 1 ? (
                                    <div aria-hidden="true" className="absolute left-4 top-[30%] -ml-px mt-0.5 h-[60%] w-[1px] bg-gray-300" />
                                ) : null}
                                <span aria-hidden="true" className="flex h-9 items-center">
                                    <span className="relative z-10 flex size-8 items-center justify-center rounded-full border-2 border-gray-300 bg-white group-hover:border-gray-400">
                                        <span className="size-2.5 rounded-full bg-transparent group-hover:bg-gray-300" />
                                    </span>
                                </span>
                            </>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    )
}
