import { Routes, Route, BrowserRouter } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
export default function Main() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Dashboard/>}/>
            </Routes>
        </BrowserRouter>


    )
}