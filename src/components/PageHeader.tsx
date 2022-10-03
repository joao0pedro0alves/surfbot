interface PageHeaderProps {
    title: string
}

export default function PageHeader(props: PageHeaderProps) {
    return (
        <header className="flex items-center justify-center bg-gray-100 p-5">
            <h2 className="text-4xl md:text-7xl font-serif">{props.title}</h2>
        </header>
    )
}
