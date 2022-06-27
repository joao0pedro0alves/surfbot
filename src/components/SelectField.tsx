import { CaretDown } from "phosphor-react"

interface SelectFieldProps
    extends React.DetailedHTMLProps<
        React.SelectHTMLAttributes<HTMLSelectElement>,
        HTMLSelectElement
    > {
    label?: string
    emptyOption?: string
    options: Array<{
        label: string
        value: any
    }>
}

const FORM_CONTROL = "flex flex-col"

export default function SelectField({
    className,
    emptyOption,
    label,
    options,
    ...props
}: SelectFieldProps) {
    const formControlClass = FORM_CONTROL + " " + className

    return (
        <div className={formControlClass}>
            {label && <label className="text-lg font-bold mb-1">{label}</label>}

            <div className="inline-block relative">
                <select
                    className="rounded shadow-sm block appearance-none w-full bg-gray-100 h-[50px] outline-blue-300 px-4 py-2 pr-8"
                    {...props}
                >
                    <option value="">{emptyOption}</option>

                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <CaretDown size={20} />
                </div>
            </div>
        </div>
    )
}

SelectField.defaultProps = {
    emptyOption: "Selecione uma opção",
}
