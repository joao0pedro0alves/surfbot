import TextField from "./TextField"
import SelectField from "./SelectField"
import Button from "./Button"
import { LockKey } from "phosphor-react"
import PaymentForm from "./PaymentForm"
import ChooseYourPlan from "./ChooseYourPlan"
import { IconWall } from "./Icons"

const STATES = [{ label: "SP", value: "sp" }]

const CITIES = [{ label: "Rio Claro", value: "rc" }]

export default function PlanForm() {
    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault()

        const formData = new FormData(e.currentTarget)
        const values = Object.fromEntries(formData)

        console.log(values)
    }

    return (
        <div className="min-h-screen bg-white">
            <div className="container flex gap-24 py-20">
                {/* ==== FORM ==== */}
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-4 min-w-[570px]"
                >
                    <TextField name="name" label="Nome" autoFocus required />
                    <TextField
                        name="email"
                        label="Email"
                        type="email"
                        required
                    />
                    <TextField
                        name="cpf"
                        label="CPF"
                        placeholder="111.111.111-01"
                        required
                    />
                    <div className="flex gap-8">
                        <TextField
                            className="w-full"
                            name="address"
                            label="Endereço"
                            placeholder="Rua, Número e Bairro"
                            required
                        />
                        <SelectField
                            className="w-full"
                            name="state"
                            label="Estado"
                            emptyOption="Selecione o Estado"
                            required
                            options={STATES}
                        />
                    </div>
                    <div className="flex gap-8">
                        <TextField
                            className="w-full"
                            name="cep"
                            label="CEP"
                            placeholder="22.222-000"
                            required
                        />
                        <SelectField
                            className="w-full"
                            name="city"
                            label="Cidade"
                            emptyOption="Selecione a Cidade"
                            required
                            options={CITIES}
                        />
                    </div>

                    {/* ==== PAYMENT FORM ==== */}
                    <PaymentForm />

                    {/* ==== SUBMIT ==== */}
                    <div className="flex flex-col gap-4">
                        <span className="block text-lg">
                            Seu cartão será debitado em R$ 49,00
                        </span>

                        <Button className="bg-blue-600 w-[257px] flex items-center justify-center">
                            <span className="font-bold text-lg">
                                REALIZAR MATRÍCULA
                            </span>
                        </Button>

                        <span className="flex gap-2 items-center text-sm">
                            <LockKey
                                className="text-green-500"
                                weight="fill"
                                size={15}
                            />
                            <span>Informações seguras e criptografadas</span>
                        </span>
                    </div>
                </form>

                {/* ==== CHOOSE YOUR PLAN ==== */}
                <div className="flex flex-1 flex-col items-center gap-9">
                    <div>
                        <ChooseYourPlan />
                    </div>
                    <div>
                        <IconWall />
                    </div>
                </div>
            </div>
        </div>
    )
}
