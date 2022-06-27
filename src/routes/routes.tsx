import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import Plan from "../pages/Plan"

export default function AppRoutes() {
    return (
        <>
            <Routes>
                <Route index element={<Home />} />
                <Route element={<Home />} />
                <Route path="/register/:id" element={<Plan />} />
                <Route path="/register" element={<Plan />} />
            </Routes>
        </>
    )
}
