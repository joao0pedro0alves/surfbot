interface TabsProps {
    tabs: Array<{
        label: string
        value: string | number
    }>
    onChange: (tab: TabsProps["tabs"][0]) => void
    value: string | number
    buttonClassName?: React.HTMLAttributes<HTMLDivElement>["className"]
}

export default function Tabs({
    value,
    onChange,
    tabs,
    buttonClassName,
    ...props
}: TabsProps) {
    const renderTabs = () =>
        tabs.map((tab, index) => {
            const selected = tab.value === value

            let className =
                "w-full h-[3.125rem] bg-white p-4 flex gap-2 items-center justify-center transition duration-75 hover:bg-gray-200" +
                " " +
                buttonClassName

            if (selected)
                className = className.replace("bg-white", "bg-gray-200")

            if (index === 0) className += " rounded-l"
            else if (index === tabs.length - 1) className += " rounded-r"
            else className += " border-x-2 border-gray-100"

            return (
                <button
                    type="button"
                    key={index}
                    className={className}
                    onClick={() => onChange(tab)}
                >
                    <input
                        value={tab.value}
                        checked={selected}
                        readOnly
                        type={"radio"}
                    />
                    <span className="font-bold text-lg">{tab.label}</span>
                </button>
            )
        })

    return (
        <div className="inline-flex w-full" {...props}>
            {renderTabs()}
        </div>
    )
}
