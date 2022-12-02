import { Plan as PlanData } from "../@types"
import { PLANS } from "../utils/plans"

import Plan from "./Plan"
import Tabs from "./Tabs"

interface ChooseYourPlanProps {
    activePlan: PlanData
    onChangePlan: (plan: PlanData) => void
}

export default function ChooseYourPlan({activePlan, onChangePlan}: ChooseYourPlanProps) {
    const tabs = PLANS.map(plan => ({
        value: plan.id,
        label: plan.title
    }))

    const handleChange = (tab:any) => {
        const newPlan = PLANS.find(p => p.id === tab.value)
        if (newPlan) onChangePlan(newPlan)
    }

    return (
        <div className="bg-gray-100 p-4 w-auto md:w-[26.875rem] md:p-8">
            <span className="block font-bold text-lg mb-8">
                Escolha o Plano
            </span>

            <Tabs
                tabs={tabs}
                value={activePlan.id}
                onChange={handleChange}
            />

            <div className="mt-10">
                <Plan
                    simple
                    data={{...activePlan}}
                    className="h-auto"
                />
            </div>
        </div>
    )
}
