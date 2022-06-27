import Logo from "./Logo"
import Ellipse from "./Ellipse"

export default function Navbar() {
    return (
        <nav
            id="surfbot-navbar"
            className="px-11 py-3 bg-gray-900 flex items-center justify-between"
        >
            <div className="flex-1">
                <Logo />
            </div>
            <div>
                <ul className="flex gap-4">
                    <li className="text-white font-bold flex items-center">
                        <a className="pl-4" href="#">
                            Praia
                        </a>
                    </li>
                    <li className="text-white font-bold flex items-center">
                        <Ellipse />
                        <a className="pl-4" href="#">
                            Aulas
                        </a>
                    </li>
                    <li className="text-white font-bold flex items-center">
                        <Ellipse />
                        <a className="pl-4" href="#">
                            Contato
                        </a>
                    </li>
                    <li className="text-white font-bold flex items-center">
                        <Ellipse />
                        <a className="active pl-4" href="#">
                            Matricule-se
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
