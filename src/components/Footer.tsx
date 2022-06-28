import { useEffect, useState, MouseEvent } from "react"
import clsx from "clsx"

import { CaretUp } from "phosphor-react"
import { Prancha } from "./Icons"
import { scrollToSmooth } from "../services/utils"

export default function Footer() {
    const [showReturnButton, setShowReturnButton] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const show = window.scrollY >= window.innerHeight
            setShowReturnButton(show)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const handleSmoothNavigation = (e: MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault()
        const scroll = scrollToSmooth(e)

        if (scroll) {
            const [onScroll] = scroll
            onScroll()
        }
    }

    return (
        <>
            <footer className="py-12 px-11 bg-blue-600 flex items-center justify-between">
                <span className="block font-bold text-lg text-white">
                    Surfnet 2021 - Alguns direitos reservados.
                </span>

                <div>
                    <Prancha color="white" />
                </div>
            </footer>
            <a
                onClick={handleSmoothNavigation}
                href="#surfbot-navbar"
                className={clsx(
                    "shadow-2xl flex items-center justify-center fixed bottom-[1rem] right-[1rem] z-10 p-0 w-10 h-10 bg-gray-900 rounded-full hover:bg-gray-700 active:shadow-lg mouse transition ease-in duration-200 focus:outline-none",
                    {
                        "opacity-0": !showReturnButton,
                        "opacity-100": showReturnButton,
                    }
                )}
            >
                <span className="text-white">
                    <CaretUp size={20} />
                </span>
            </a>
        </>
    )
}
