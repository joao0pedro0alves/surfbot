import { useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import clsx from "clsx"

import Logo from "./Logo"
import Ellipse from "./Ellipse"

export default function Navbar() {
    const location = useLocation()
    const navigate = useNavigate()

    const [currentHash, setCurrentHash] = useState("")

    const isActive = (pathOrHash: string) =>
        pathOrHash === location.pathname || pathOrHash === currentHash

    const handleSpaNavigation: React.MouseEventHandler<
        HTMLAnchorElement
    > = async (e) => {
        e.preventDefault()

        if (location.pathname !== "/") {
            navigate("/")
            return
        }

        const link = e.currentTarget

        const anchor = link.href.split("#")[1]
        const section = document.getElementById(anchor)

        if (section) {
            const scrollTop = section.offsetTop - 150
            window.scrollTo({ top: scrollTop, left: 0, behavior: "smooth" })
            setCurrentHash(`#${anchor}`)
        }
    }

    const getLinkProps = (anchor: string) => ({
        onClick: handleSpaNavigation,
        href: anchor,
        className: clsx("pl-4", {
            active: isActive(anchor),
        }),
    })

    return (
        <nav
            id="surfbot-navbar"
            className="px-11 py-3 bg-gray-900 flex items-center justify-between"
        >
            <div className="flex-1">
                <Link to="/">
                    <Logo />
                </Link>
            </div>
            <div>
                <ul className="flex gap-4">
                    <li className="text-white font-bold flex items-center">
                        <a {...getLinkProps("#about-beach")}>Praia</a>
                    </li>
                    <li className="text-white font-bold flex items-center">
                        <Ellipse />
                        <a {...getLinkProps("#lessons")}>Aulas</a>
                    </li>
                    <li className="text-white font-bold flex items-center">
                        <Ellipse />
                        <a {...getLinkProps("#contact")}>Contato</a>
                    </li>
                    <li className="text-white font-bold flex items-center">
                        <Ellipse />
                        <Link
                            className={clsx("pl-4", {
                                active: isActive("/register"),
                            })}
                            to="/register"
                        >
                            Matricule-se
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
