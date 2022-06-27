interface TextFieldProps
    extends React.DetailedHTMLProps<
        React.InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement
    > {
    label?: string
}

const FORM_CONTROL = "flex flex-col"

export default function TextField({
    label,
    className,
    ...props
}: TextFieldProps) {
    const formControlClass = FORM_CONTROL + " " + className

    return (
        <div className={formControlClass}>
            {label && <label className="text-lg font-bold mb-1">{label}</label>}
            <input
                className="rounded shadow-sm bg-gray-100 h-[50px] outline-blue-300 indent-4"
                {...props}
            />
        </div>
    )
}
