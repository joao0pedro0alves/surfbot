import { useState } from "react"
import SelectField from "./SelectField"
import Tabs from "./Tabs"
import TextField from "./TextField"

const MONTHS = [{ label: "Jan", value: "jan" }]

const YEARS = [{ label: "2022", value: 2022 }]

export default function PaymentForm() {
    const [current, setCurrent] = useState<string | number>("0")

    return (
        <div className="my-4">
            <span className="block font-bold text-lg text-blue-600">
                Forma de Pagamento
            </span>

            <div className="border-y-2 border-gray-100 py-8 mt-4 flex flex-col gap-4">
                <div>
                    <Tabs
                        buttonClassName="w-[210px] bg-gray-100"
                        onChange={(tab) => setCurrent(tab.value)}
                        value={current}
                        tabs={[
                            { label: "Cartão de Crédito", value: "0" },
                            { label: "Boleto Bancário", value: "1" },
                        ]}
                    />
                </div>
                <div className="flex gap-8">
                    <TextField
                        name="card.name"
                        label="Nome do Cartão"
                        required
                        placeholder="Nome impresso no cartão"
                        className="w-[270px]"
                    />

                    <div className="w-[270px]">
                        <label className="block text-lg font-bold mb-1">
                            Data de Expiração
                        </label>
                        <div className="flex gap-8">
                            <SelectField
                                className="w-full"
                                name="card.month"
                                emptyOption="Mês"
                                options={MONTHS}
                            />
                            <SelectField
                                className="w-full"
                                name="card.year"
                                emptyOption="Ano"
                                options={YEARS}
                            />
                        </div>
                    </div>
                </div>

                <div className="flex gap-8">
                    <TextField
                        name="card.number"
                        label="Número do Cartão"
                        required
                        placeholder="5555 5555 5555 5555"
                        className="w-[270px]"
                    />
                    <TextField
                        name="card.security"
                        label="Código de Segurança"
                        required
                        placeholder="XXX"
                        className="w-[270px]"
                    />
                </div>
            </div>
        </div>
    )
}
