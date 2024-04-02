const urlProductos = import.meta.env.VITE_API_PRODUCTO;
const urlProducto = import.meta.env.VITE_API_PRODUCTO_INDIVIDUAL;

console.log(urlProductos);

//GET
export const leerProductosAPI = async () => {
  try {
    const respuesta = await fetch(urlProductos);
    const listaProductos = await respuesta.json();
    console.log(listaProductos);
    return listaProductos;
  } catch (error) {
    console.log(error);
  }
};

//GET que devuelve un producto
export const obtenerProductoID = async (productoID) => {
  try {
    const respuesta = await fetch(urlProducto + "/" + productoID);

    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

//POST
export const crearProductosAPI = async (productoNuevo) => {
  try {
    const respuesta = await fetch(urlProductos, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productoNuevo),
    });
    console.log(respuesta);
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

//PUT - PACH (DIFERENCIA, PUT CAMBIA TODO EL OBJETO, PATCH SOLO UNA PROPIEDAD)
export const modifcarProductosAPI = async (productoModificado,id) => {
  try {
    const respuesta = await fetch(urlProducto + "/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productoModificado),
    });
    console.log(respuesta);
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

//DELETE

export const borrarProductoAPI = async (id) => {
  try {
    const respuesta = await fetch(`${urlProducto}/${id}`, {
      method: "DELETE",
    });
    console.log(respuesta);
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};


//PUT

//modificar login cuando tengamos un backend
const userAdmin = {
  mail: "admin@rollingcoffe.com",
  password: "Admin1234",
};

export const logicaLogin = (usuario) => {
  if (
    usuario.email === userAdmin.mail &&
    usuario.password === userAdmin.password
  ) {
    sessionStorage.setItem("usuarioKey", JSON.stringify(usuario.email));
    return true;
  }else{
    return false;
  }
};
