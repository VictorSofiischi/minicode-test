import { useMask } from "@react-input/mask";
import { useState } from "react"


export default function ContactSection() {
    const [nameSurname, setNameSurname] = useState<string>('');
    const [phone, setPhone] = useState<string>('(+373)')

    const inputRef = useMask({
        mask: '(+373)___-__-___',
        replacement: { _: /\d/ },
        showMask: true,
    });

    return (
        <div className="max-w-[1300px] self-center w-full mt-24 mb-24 px-5">
            <div className="flex flex-row justify-between">
                <span className="text-[#1B1918] font-bold text-4xl">Ai nevoie de o consultatie?</span>
                <div className="flex flex-row gap-5">
                    <input
                        id="nameSurname"
                        name="nameSurname"
                        placeholder="Nume/Prenume"
                        aria-label="nameSurname"
                        onChange={(event) => { setNameSurname(event.target.value) }}
                        className="block w-full rounded-md bg-white h-[36px] self-center px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#A40731] sm:text-sm/6"
                    />
                    <div className="flex items-center w-full">
                        <input
                            type="tel"
                            id="phone"
                            ref={inputRef}
                            name="phone"
                            onChange={(event) => { setPhone(event.target.value) }}
                            placeholder="Enter number"
                            aria-label="Phone number"
                            className="block w-full rounded-md w-full bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#A40731] sm:text-sm/6"
                            pattern="\d*"
                            inputMode="numeric"
                            maxLength={16}
                        />
                    </div>
                </div>
            </div>
            <div className="flex flex-row justify-between w-full mt-10">
                <span className="text-[#42403F] w-[40%] flex-wrap">Lasă numele și numărul tău de telefon, iar noi te vom contacta în cel mai scurt timp posibil.</span>
                <button className="flex flex-row bg-[#A40731] h-[40px] items-center gap-5 py-2 px-20 rounded-md">
                    Trimite
                </button>
            </div>
        </div>
    )
}