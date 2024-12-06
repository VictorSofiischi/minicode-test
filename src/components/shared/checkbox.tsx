import { ReactNode } from "react";


export default function CheckBox({ children }: { children?: ReactNode }) {

    return (
        <div className="flex h-6 shrink-0 items-center">
            <div className="group grid size-4 grid-cols-1">
                <input
                    id="comments"
                    name="comments"
                    type="checkbox"
                    aria-describedby="comments-description"
                    className="col-start-1 row-start-1 appearance-none rounded border-[2px] border-[#A40731] bg-white checked:border-[#A40731] checked:bg-[#A40731] indeterminate:border-[#A40731] indeterminate:bg-[#A40731] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A40731] disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                />
                <svg
                    fill="none"
                    viewBox="0 0 14 14"
                    className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25"
                >
                    <path
                        d="M3 8L6 11L11 3.5"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="opacity-0 group-has-[:checked]:opacity-100"
                    />
                    <path
                        d="M3 7H11"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="opacity-0 group-has-[:indeterminate]:opacity-100"
                    />
                </svg>
            </div>
            {children ? (children) : null}
        </div>
    )
}