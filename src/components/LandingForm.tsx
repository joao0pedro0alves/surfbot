import { FormEvent } from "react"
import { ArrowRight } from "phosphor-react"

export default function LandingForm() {
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="flex rounded shadow-black w-[470px]"
        >
            <input
                className="flex-1 h-12 outline-none rounded-tl rounded-bl indent-3"
                placeholder="Email"
                autoComplete="off"
                type="email"
                required
            />
            <button
                className="h-12 p-3 flex items-center justify-between rounded-tr rounded-br bg-red-600 text-white font-bold hover:bg-red-300"
                type="submit"
            >
                <span className="block mr-5">MATRICULE-SE</span>
                <ArrowRight size={20} />
            </button>
        </form>
    )
}
