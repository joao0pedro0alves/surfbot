import { useState, MouseEvent } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import clsx from "clsx"

import { scrollToSmooth } from "../services/utils"

import Logo from "./Logo"
import Ellipse from "./Ellipse"

export default function Navbar() {
    const location = useLocation()
    const navigate = useNavigate()

    const [currentHash, setCurrentHash] = useState("")

    const isActive = (pathOrHash: string) =>
        pathOrHash === location.pathname || pathOrHash === currentHash

    const handleSpaNavigation = (e: MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault()

        if (location.pathname !== "/") {
            navigate("/")
            return
        }

        const scroll = scrollToSmooth(e)

        if (scroll) {
            const [onScroll, anchor] = scroll
            setCurrentHash(`#${anchor}`)
            onScroll()
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

            <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-white rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
            </button>

            <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                <ul className="flex gap-4 ">
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
