interface TextAreaProps
    extends React.DetailedHTMLProps<
        React.TextareaHTMLAttributes<HTMLTextAreaElement>,
        HTMLTextAreaElement
    > {
    label: string
}

export default function TextArea({ label, ...props }: TextAreaProps) {
    return (
        <div className="flex flex-col">
            <label className="text-lg font-bold mb-1">{label}</label>
            <textarea
                className="bg-gray-100 min-h-[180px] outline-blue-300 indent-4 py-2"
                {...props}
            />
        </div>
    )
}
