interface EllipseProps {
    color?: "white" | "red" | "green"
}

export default function Ellipse(props: EllipseProps) {
    const getColorClassName = () => {
        switch (props.color) {
            case "red":
                return "border-red-300"
            case "green":
                return "border-green-600"
            case "white":
            default:
                return "border-white"
        }
    }

    return (
        <div
            className={`w-2 h-2 rounded-full border-2 ${getColorClassName()} `}
        />
    )
}
