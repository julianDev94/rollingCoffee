import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./components/common/Footer";
import Menu from "./components/common/Menu";
import Administrador from "./components/pages/Administrador";
import Error404 from "./components/pages/Error404";
import Inicio from "./components/pages/Inicio";

function App() {
  return (
    <>
      <Menu></Menu>
      {/* <Inicio></Inicio> */}
      {/* <Administrador></Administrador> */}
      <Error404></Error404>
      <Footer></Footer>
    </>
  );
}

export default App;
