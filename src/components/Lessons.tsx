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

                <div className="mt-11 flex justify-center items-center gap-8">
                    <Plan
                        amountPlanks={1}
                        title="INFANTIL"
                        price={49}
                        details={[
                            "Público entre 5 e 15 anos",
                            "Equipamentos fornecidos",
                            "Horários de Sex. à Sab.",
                            "2 horas seguidas de aula",
                        ]}
                    />
                    <Plan
                        amountPlanks={2}
                        title="ADULTO"
                        price={69}
                        details={[
                            "Público entre 16 e 60 anos",
                            "Equipamentos fornecidos",
                            "Horários de Sex. à Sab.",
                            "3 horas seguidas de aula",
                        ]}
                    />
                    <Plan
                        amountPlanks={3}
                        title="PROFISSIONAL"
                        price={99}
                        details={[
                            "Experiência de 3 anos no surf",
                            "Você deve trazer o equipamento",
                            "Horários de Sex. à Sab.",
                            "4 horas seguidas de aula",
                        ]}
                    />
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
