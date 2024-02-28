import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css"
import Footer from "./components/common/Footer";
import Menu from "./components/common/Menu";
import Administrador from "./components/pages/Administrador";
import Error404 from "./components/pages/Error404";
import Inicio from "./components/pages/Inicio";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FormularioProducto from "./components/pages/productos/FormularioProducto";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
    <Menu />
      <Routes>
         <Route exact path="/" element={<Inicio></Inicio>}/>
         <Route exact path="/administrador" element={<Administrador></Administrador>}/>
         <Route exact path="/administrador/crear" element={<FormularioProducto></FormularioProducto>}></Route>
         <Route exact path="*" element={<Error404></Error404>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
