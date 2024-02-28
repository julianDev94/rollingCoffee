const urlProductos = import.meta.env.VITE_API_PRODUCTO;

console.log(urlProductos);

export const leerProductosAPI = async () =>{
    try {
        const respuesta = await fetch(urlProductos);
        const listaProductos = await respuesta.json();
        console.log(listaProductos);
        return listaProductos;
    } catch (error) {
        console.log(error)
    }
}