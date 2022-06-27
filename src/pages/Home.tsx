import About from "../components/About"
import Cite from "../components/Cite"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Landing from "../components/Landing"
import Lessons from "../components/Lessons"
import Navbar from "../components/Navbar"

export default function Home() {
    return (
        <div id="home">
            <Header />
            <Navbar />
            <Landing />
            <About />
            <Lessons />
            <Cite />
            <Contact />
            <Footer />
        </div>
    )
}
