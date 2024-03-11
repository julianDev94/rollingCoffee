import { Navigate } from "react-router";


const RutasProtegidas = ({children}) => {
    //dada alguna logica entonces mostrar las rutas del admin
    const administrador = JSON.parse(sessionStorage.getItem("usuarioKey")) || null;
    //no hay un usuario logueado
    if(!administrador){
        //si no es admin, enviar a login
        return <Navigate to="/login"></Navigate>
    }else{
        return children
    }
};

export default RutasProtegidas;