import { ArrowRight } from "phosphor-react"
import { IconWall } from "./Icons"
import ContactForm from "./ContactForm"
import Ellipse from "./Ellipse"

export default function Contact() {
    return (
        <section id="contact" className="bg-white">
            <div className="container py-16 px-11">
                <h3 className="text-center font-serif text-7xl">Contato</h3>
            </div>

            <div className="flex items-center justify-center gap-28 pb-12">
                <div className="w-[470px]">
                    <ContactForm />
                </div>

                <div className="h-[470px] border-r-2 border-gray-100"></div>

                <div className="flex gap-2">
                    <div>
                        {/* ==== ADDRESS ==== */}
                        <div className="border-b-2 border-gray-100 py-4 w-[270px]">
                            <span className="block font-bold text-lg my-1">
                                Endereço
                            </span>
                            <span className="block">Praia Mansa nº 47, </span>
                            <span className="block">Rio de Janeiro - RJ</span>
                            <span className="block">
                                Procure a barraca vermelha
                            </span>

                            <a href="#" className="flex gap-2 mt-3">
                                <span className="font-bold">VER NO MAPA</span>
                                <ArrowRight
                                    size={20}
                                    fontWeight="bold"
                                    className="text-red-600"
                                />
                            </a>
                        </div>

                        {/* ==== PHONE ==== */}
                        <div className="border-b-2 border-gray-100 py-4 w-[270px]">
                            <span className="block font-bold text-lg my-1">
                                Email & Telefone
                            </span>
                            <span className="block">contato@surfbot.com</span>
                            <span className="block">21 99999-9999</span>
                        </div>

                        {/* ==== OPENING HOURS ==== */}
                        <div className="border-b-2 border-gray-100 py-4 w-[270px]">
                            <div className="my-1 flex items-center gap-2">
                                <Ellipse color="green" />
                                <span className="block font-bold text-lg">
                                    Horário
                                </span>
                            </div>
                            <span className="block">De sexta à Sábado</span>
                            <span className="block">Das 06:00 às 14:00</span>
                        </div>
                    </div>

                    <div>
                        <IconWall />
                    </div>
                </div>
            </div>
        </section>
    )
}
