import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import SalonList from "./components/Salones/SalonList.jsx";
import SalonForm from "./components/Salones/SalonForm.jsx";
import AreaList from "./components/Area/AreaList.jsx";
import AreaForm from "./components/Area/AreaForm.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Rutas Area */}
        <Route path="/areas" element={<AreaList />} />
        <Route path="/areas/nuevo" element={<AreaForm />} />
        <Route path="/areas/editar/:id" element={<AreaForm />} />

        {/* Rutas Salon */}
        <Route path="/salones" element={<SalonList />} />
        <Route path="/salones/nuevo" element={<SalonForm />} />
        <Route path="/salones/editar/:id" element={<SalonForm />} />

        {/* Rutas Oficina */}
        {/* <Route path="/salones" element={<SalonList />} />
        <Route path="/salones/nuevo" element={<SalonForm />} />
        <Route path="/salones/editar/:id" element={<SalonForm />} /> */}

        {/* Rutas Empleados */}
        {/* <Route path="/salones" element={<SalonList />} />
        <Route path="/salones/nuevo" element={<SalonForm />} />
        <Route path="/salones/editar/:id" element={<SalonForm />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
