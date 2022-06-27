import Ellipse from "./Ellipse"
import { Prancha } from "./Icons"
import { ArrowRight } from "phosphor-react"

interface PlanProps {
    amountPlanks?: number
    title: string
    details: string[]
    price: number
    simple?: boolean
    className?: React.HTMLAttributes<HTMLDivElement>["className"]
}

const PLAN_DEFAULT_STYLE =
    "bg-white rounded relative pb-8 pt-9 px-14 w-[370px] h-[414px] drop-shadow-lg"

export default function Plan(props: PlanProps) {
    const className = PLAN_DEFAULT_STYLE + " " + props.className

    const formattedPrice = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
        minimumFractionDigits: 2,
    }).format(props.price)

    return (
        <div className={className}>
            <div className="absolute top-[-20px] left-0 right-0 flex justify-center">
                <div className="flex items-center gap-2">
                    {[...Array(props.amountPlanks)].map((_, index) => (
                        <Prancha key={index} />
                    ))}
                </div>
            </div>

            <div>
                <h4 className="text-center font-bold text-2xl">
                    {props.title}
                </h4>

                <div className="py-7 mt-7 mb-4 border-y-2 border-gray-100">
                    <ul>
                        {props.details.map((detail, idx) => (
                            <li
                                key={idx}
                                className="flex items-center gap-2 my-1"
                            >
                                <Ellipse color="red" />
                                <span>{detail}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <span className="font-bold text-blue-600">
                        {formattedPrice} / Aula
                    </span>
                </div>

                {!props.simple && (
                    <div className="mt-8">
                        <button className="w-full rounded-md bg-gray-800 text-white flex items-center justify-between py-2 px-4 transition duration-75 hover:bg-gray-700">
                            <span className="font-bold text-lg">
                                MATRICULE-SE
                            </span>
                            <ArrowRight size={20} weight="bold" />
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}

Plan.defaultProps = {
    amountPlanks: 1,
    simple: false,
}
