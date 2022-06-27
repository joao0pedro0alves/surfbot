import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import PageHeader from "../components/PageHeader"
import PlanForm from "../components/PlanForm"

export default function Plan() {
    return (
        <div id="plan">
            <Navbar />
            <PageHeader title="Matricule-se" />
            <PlanForm />
            <Footer />
        </div>
    )
}
