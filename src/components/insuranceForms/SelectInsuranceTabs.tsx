import { RootState, useAppDispatch } from '@/store';
import { handleChangeInsuranceTab } from '@/store/insurance/insuranceSlice';
import { useSelector } from 'react-redux'

export type InsuranceTab = {
    id: number;
    value: string;
}

export const insuranceTypes: InsuranceTab[] = [
    {
        id: 1,
        value: 'Carte Verde'
    },
    {
        id: 2,
        value: 'RCA'
    },
    {
        id: 3,
        value: 'Casco'
    },
    {
        id: 4,
        value: 'Medicala'
    },
    {
        id: 5,
        value: 'Accidente'
    },
    {
        id: 6,
        value: 'Bunuri'
    },
    {
        id: 7,
        value: 'Locuinte (imobile)'
    }
]

export const SelectInsuranceTabs = () => {
    const selectedTab = useSelector((state: RootState) => state.insurance.selectedTab);
    const dispatch = useAppDispatch();

    return (
        <div className="bg-custom-gradient p-10 max-w-[1300px] rounded-md mt-16">
            <h3 className="text-white text-3xl font-bold mb-6">Alege tipul de asigurare</h3>
            <div className="flex flex-wrap flex-row gap-5 justify-between">
                {insuranceTypes.map((item) => (
                    <button
                        className="bg-white px-5 py-2 rounded-md font-semibold text-[#42403F]"
                        key={item.id}
                        onClick={() => {
                            dispatch(handleChangeInsuranceTab({ tab: item }));
                        }}
                    >
                        <span
                            className={`${selectedTab?.id === item.id
                                ? "text-transparent bg-clip-text bg-custom-gradient"
                                : ""
                                }`}
                        >
                            {item.value}
                        </span>
                    </button>
                ))}
                <button className="flex flex-row items-center gap-3 font-bold">
                    Altele
                    <img src="/arrow-right.svg" className="h-6 self-center" />
                </button>
            </div>
        </div>
    )
}