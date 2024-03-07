const urlProductos = import.meta.env.VITE_API_PRODUCTO;

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

//DELETE

export const borrarProductoAPI = async (id) => {
  try {
    const respuesta = await fetch(`${urlProductos}/${id}`, {
      method: "DELETE",
    });
    console.log(respuesta);
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};
