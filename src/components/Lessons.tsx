import { PLANS } from "../utils/plans"

import Plan from "./Plan"
import { Ondas } from "./Icons"

export default function Lessons() {
    return (
        <section id="lessons" className="relative bg-gray-100 px-11 py-16">
            <div className="absolute top-[-35px] left-0 right-0 mx-auto flex justify-center">
                <Ondas />
            </div>

            <div>
                <h2 className="text-center text-7xl font-serif">Aulas</h2>

                <div className="mt-11 flex justify-center items-center gap-8 flex-wrap">
                    {PLANS.map((plan) => {
                        return <Plan key={plan.id} data={{ ...plan }} />
                    })}
                </div>

                <div className="text-center mt-8">
                    <span className="block">
                        Possui um grupo com mais de{" "}
                        <span className="text-red-300 font-bold">
                            3 pessoas
                        </span>{" "}
                        ?
                    </span>
                    <span className="block">
                        Entre{" "}
                        <span className="border-b-2 border-red-300">
                            em contato
                        </span>{" "}
                        para um desconto personalizado.
                    </span>
                </div>
            </div>
        </section>
    )
}
