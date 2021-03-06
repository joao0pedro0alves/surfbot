import { FormEvent } from "react"

import { ArrowRight } from "phosphor-react"
import TextField from "./TextField"
import TextArea from "./TextArea"
import Button from "./Button"

export default function ContactForm() {
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
    }

    return (
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
            <TextField label="Nome" name="name" required />
            <TextField
                label="Email"
                name="email"
                required
                type="email"
                autoComplete="email"
            />
            <TextArea label="Mensagem" name="message" required />
            <Button className="max-w-[230px] hover:bg-gray-700">
                <span className="text-lg font-bold">ENVIAR MENSAGEM</span>
                <ArrowRight fontSize={20} fontWeight="bold" />
            </Button>
        </form>
    )
}
