interface TextFieldProps
    extends React.DetailedHTMLProps<
        React.InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement
    > {
    label: string
}

export default function TextField({ label, ...props }: TextFieldProps) {
    return (
        <div className="flex flex-col">
            <label className="text-lg font-bold mb-1">{label}</label>
            <input
                className="bg-gray-100 h-12 outline-blue-300 indent-4"
                {...props}
            />
        </div>
    )
}
