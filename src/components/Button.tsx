interface ButtonProps
    extends React.DetailedHTMLProps<
        React.ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    > {}

const BUTTON_DEFAULT_STYLE =
    "rounded flex gap-2 items-center p-3 bg-gray-800 text-white h-[3.125rem] transition-colors"

export default function Button(props: ButtonProps) {
    const className = BUTTON_DEFAULT_STYLE + " " + props.className
    return <button {...props} className={className} />
}
