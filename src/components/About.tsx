import beach from "../assets/images/foto-local.png"
import maps from "../assets/images/foto-mapa.png"
import Ellipse from "./Ellipse"

import { Sandalhas, Coco, Boia } from "./Icons"

export default function About() {
    return (
        <section id="about-beach" className="bg-white">
            <div className="container py-16 px-11 flex items-start justify-between w-full gap-32">
                {/* ==== ABOUT LOCALIZATION ==== */}
                <div>
                    <div className="relative flex flex-col items-center">
                        <img
                            alt="Praia"
                            src={beach}
                            className="h-[671px] w-[570px] max-w-none"
                        />
                        <img
                            className="max-w-none absolute bottom-[-120px]"
                            alt="Mapa"
                            src={maps}
                        />
                    </div>

                    <div className="mt-[136px] flex flex-col gap-4">
                        <div className="flex items-center gap-2">
                            <Ellipse color="red" />
                            <span className="font-bold text-gray-900">
                                COMO CHEGAR
                            </span>
                        </div>

                        <div className="flex items-center gap-2">
                            <span className="text-blue-600 font-bold">-</span>
                            <span className="font-bold text-gray-900">
                                Carro{" "}
                                <span className="text-gray-300">
                                    pela via Lúcio Costa sentido Barra
                                </span>
                            </span>
                        </div>

                        <div className="flex items-center gap-2">
                            <span className="text-blue-600 font-bold">-</span>
                            <span className="font-bold text-gray-900">
                                Ônibus{" "}
                                <span className="text-gray-300">
                                    linhas 2333, 138, 189 e 170
                                </span>
                            </span>
                        </div>

                        <div className="flex items-center gap-2">
                            <span className="text-blue-600 font-bold">-</span>
                            <span className="font-bold text-gray-900">
                                Metrô{" "}
                                <span className="text-gray-300">
                                    linha azul sentido Zona Sul
                                </span>
                            </span>
                        </div>
                    </div>
                </div>

                {/* ==== ABOUT ==== */}
                <div>
                    <h2 className="text-gray-900 font-serif text-7xl">
                        <span className="text-blue-600">Aulas</span> em uma das
                        melhores praias do{" "}
                        <span className="text-blue-600">Rio</span>.
                    </h2>

                    <div className="w-full mt-16">
                        <ul>
                            <li className="py-8 border-t-2 border-gray-100 flex items-center gap-8">
                                <Sandalhas />
                                <span className="text-2xl">8km da costa</span>
                            </li>
                            <li className="py-8 border-t-2 border-b-2 border-gray-100 flex items-center gap-8">
                                <Coco />
                                <span className="text-2xl">
                                    Restaurantes à beira mar
                                </span>
                            </li>
                            <li className="py-8 border-b-2 border-gray-100 flex items-center gap-8">
                                <Boia />
                                <span className="text-2xl">
                                    Salva-vidas a cada 300m
                                </span>
                            </li>
                        </ul>
                    </div>

                    <div className="w-full mt-8">
                        <p>
                            Como cidade capital, abriga na zona chamada Plateau,
                            promontório à beira-mar, edifícios públicos e outras
                            construções de importância, como o Palácio
                            Presidencial, construído no fim do século XIX para
                            ser a residência do governador português.
                        </p>
                        <p className="mt-5">
                            Como cidade capital, abriga na zona chamada Plateau,
                            promontório à beira-mar, edifícios públicos e outras
                            construções de importância, como o Palácio
                            Presidencial, construído no fim do século XIX para
                            ser a residência do governador português.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
