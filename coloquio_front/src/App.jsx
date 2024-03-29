//App.js
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Inicio from "./Components/Routes/Inicio/Inicio.jsx";
import Objetivos from "./Components/Routes/Objetivos/Objetivos.jsx";
import Empresas from "./Components/Routes/Empresas/Empresas.jsx";
import Eventos from "./Components/Routes/Eventos/Eventos.jsx";
import Entrevistas_y_reclutamientos from "./Components/Routes/Entrevistas_y_reclutamientos/Entrevistas_y_reclutamientos.jsx";

import Login from "./Components/Routes/Login/Login.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Inicio />} />
          <Route path="/objetivos" exact element={<Objetivos />} />
          <Route path="/empresas" exact element={<Empresas />} />
          <Route path="/eventos" exact element={<Eventos />} />
          <Route
            path="/entrevistas_y_reclutamientos"
            exact
            element={<Entrevistas_y_reclutamientos />}
          />

          <Route path="/Login" exact element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
