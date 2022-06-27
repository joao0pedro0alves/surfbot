import { useState } from "react"
import Plan from "./Plan"
import Tabs from "./Tabs"

const PLANS = [
    { label: "Infantil", value: "0" },
    { label: "Adulto", value: "1" },
    { label: "Profissional", value: "2" },
]

export default function ChooseYourPlan() {
    const [current, setCurrent] = useState<string | number>("0")

    return (
        <div className="bg-gray-100 p-8 w-[26.875rem]">
            <span className="block font-bold text-lg mb-8">
                Escolha o Plano
            </span>

            <Tabs
                tabs={PLANS}
                value={current}
                onChange={(tab) => setCurrent(tab.value)}
            />

            <div className="mt-10">
                <Plan
                    simple
                    amountPlanks={1}
                    title="INFANTIL"
                    price={49}
                    details={[
                        "Público entre 5 e 15 anos",
                        "Equipamentos fornecidos",
                        "Horários de Sex. à Sab.",
                        "2 horas seguidas de aula",
                    ]}
                    className="h-auto"
                />
            </div>
        </div>
    )
}
