import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'

type IInfoCardProps = {
    objectText: string;
    riskText: string
}

export default function InfoCard({ objectText, riskText }: IInfoCardProps) {
    return (
        <div className="">
            <div className="px-6">
                <div className="max-w-4xl divide-y divide-gray-900/10">
                    <dl className="">
                        <Disclosure as="div" className="pt-6">
                            <dt>
                                <DisclosureButton className="group flex w-full items-start justify-between text-left text-gray-900 bg-white rounded-md p-3">
                                    <span className="text-lg font-semibold">{"Obiectul asigurării"}</span>
                                    <span className="ml-6 flex h-7 items-center">
                                        <img aria-hidden="true" src='/icons/openInfo.svg' className="size-6 group-data-[open]:hidden" />
                                        <img aria-hidden="true" src='/icons/closeInfo.svg' className="size-6 group-[&:not([data-open])]:hidden" />
                                    </span>
                                </DisclosureButton>
                            </dt>
                            <DisclosurePanel as="dd" className="rounded-md bg-white">
                                <hr className='h-px border-[#A40731] mb-2' />
                                <p className="text-base/7 text-gray-600 px-2">{objectText}</p>
                            </DisclosurePanel>
                        </Disclosure>
                        <Disclosure as="div" className="pt-6">
                            <dt>
                                <DisclosureButton className="group flex w-full items-start justify-between text-left text-gray-900 bg-white rounded-md p-3">
                                    <span className="text-lg font-semibold">{"Riscuri și obligațiuni"}</span>
                                    <span className="ml-6 flex h-7 items-center">
                                        <img aria-hidden="true" src='/icons/openInfo.svg' className="size-6 group-data-[open]:hidden" />
                                        <img aria-hidden="true" src='/icons/closeInfo.svg' className="size-6 group-[&:not([data-open])]:hidden" />
                                    </span>
                                </DisclosureButton>
                            </dt>
                            <DisclosurePanel as="dd" className="rounded-md bg-white">
                                <hr className='h-px border-[#A40731] mb-2' />
                                <p className="text-base/7 text-gray-600 px-2">{riskText}</p>
                            </DisclosurePanel>
                        </Disclosure>
                    </dl>
                </div>
            </div>
        </div>
    )
}
