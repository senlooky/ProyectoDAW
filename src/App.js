import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import AventuraPage from "./pages/AventuraPage"
import CienciaPage from "./pages/CienciaPage"
import ParaPage from "./pages/ParaPage"
import LoginPage from "./pages/LoginPage"
import NotFoundPage from "./pages/NotFoundPage"
import RegistroPage from "./pages/RegistroPage"
import LogUpPage from "./pages/LogUpPage"



export default function App(){
    return (
        <BrowserRouter>

        
        <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/Aventura" element={<AventuraPage />}></Route>
            <Route path="/CienciaFiccion" element={<CienciaPage />}></Route>
            <Route path="/Paranormal" element={<ParaPage />}></Route>
            <Route path="/Login" element={<LoginPage />}></Route>
            <Route path="/Registro-libro" element={<RegistroPage/>}></Route>
            <Route path="/LogUp" element={<LogUpPage/>}></Route>
            <Route path="/*" element={<NotFoundPage />}></Route>

        </Routes>
        </BrowserRouter>
    )
}