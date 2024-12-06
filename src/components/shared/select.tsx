export type SelectValue = {
    label: string;
    value: string;
};

export default function Select({
    options,
    placeholder,
    disabled
}: {
    options: SelectValue[];
    placeholder?: string;
    disabled?: boolean
}) {
    return (
        <div>
            <div className="mt-2 grid grid-cols-1">
                <select
                    className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-md text-[#42403F] outline outline-0 -outline-offset-1 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#A40731]"
                    defaultValue=""
                    disabled={disabled}
                >
                    {placeholder && (
                        <option value="" disabled>
                            {placeholder}
                        </option>
                    )}
                    {options.map((item) => (
                        <option key={item.value} value={item.value}>
                            {item.label}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}
