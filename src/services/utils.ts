import { MouseEvent } from "react"

type ScrollToSmoothResult =
    | [
          /** Function used to navigate to section */
          () => void,
          /** Href anchor */
          string,
          /** Section */
          HTMLElement
      ]
    | null

export const scrollToSmooth = (
    e: MouseEvent<HTMLAnchorElement>
): ScrollToSmoothResult => {
    e.preventDefault()

    const link = e.currentTarget

    const anchor = link.href.split("#")[1]
    const section = document.getElementById(anchor)

    if (section) {
        const scrollTop = section.offsetTop - 150

        return [
            () =>
                window.scrollTo({
                    top: scrollTop,
                    left: 0,
                    behavior: "smooth",
                }),
            anchor,
            section,
        ]
    }

    return null
}
