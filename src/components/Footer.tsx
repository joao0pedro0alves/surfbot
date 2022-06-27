import { Prancha } from "./Icons"

export default function Footer() {
    return (
        <footer className="py-12 px-11 bg-blue-600 flex items-center justify-between">
            <span className="block font-bold text-lg text-white">
                Surfnet 2021 - Alguns direitos reservados.
            </span>

            <div>
                <Prancha color="white" />
            </div>
        </footer>
    )
}
