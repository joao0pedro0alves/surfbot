import { useNavigate } from "react-router-dom"
import { ArrowRight } from "phosphor-react"

import { Plan as PlanData } from "../@types"
import { formatPrice } from "../utils/format"

import Ellipse from "./Ellipse"
import { Prancha } from "./Icons"

interface PlanProps {
    data: PlanData
    simple?: boolean
    className?: React.HTMLAttributes<HTMLDivElement>["className"]
}

const PLAN_DEFAULT_STYLE =
    "bg-white rounded relative pb-8 pt-9 px-14 w-[370px] h-[414px] drop-shadow-lg"

export default function Plan({data, simple, ...props}: PlanProps) {
    const navigate = useNavigate()

    const className = PLAN_DEFAULT_STYLE + " " + props.className

    const handleNavigate = () => navigate(`/register/${data.id}`)

    return (
        <div className={className}>
            <div className="absolute top-[-20px] left-0 right-0 flex justify-center">
                <div className="flex items-center gap-2">
                    {[...Array(data.amountPlanks)].map((_, index) => (
                        <Prancha key={index} />
                    ))}
                </div>
            </div>

            <div>
                <h4 className="text-center font-bold text-2xl">
                    {data.title.toUpperCase()}
                </h4>

                <div className="py-7 mt-7 mb-4 border-y-2 border-gray-100">
                    <ul>
                        {data.details.map((detail, idx) => (
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
                        {formatPrice(data.price)} / Aula
                    </span>
                </div>

                {!simple && (
                    <div className="mt-8">
                        <button
                            onClick={handleNavigate}
                            className="w-full rounded-md bg-gray-800 text-white flex items-center justify-between py-2 px-4 transition duration-75 hover:bg-gray-700"
                        >
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
    id: "0",
    amountPlanks: 1,
    simple: false,
}
