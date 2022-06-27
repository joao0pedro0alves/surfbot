import LandingForm from "./LandingForm"

export default function Landing() {
    return (
        <div className="bg-no-repeat bg-cover bg-fixed bg-[url(../assets/images/bg-landing.png)] h-[500px] flex items-end">
            <div className="container px-11 py-12 flex items-center justify-between w-full">
                <h1 className="text-white font-serif text-7xl">
                    Escola de surf
                </h1>

                <div>
                    <LandingForm />
                </div>
            </div>
        </div>
    )
}
