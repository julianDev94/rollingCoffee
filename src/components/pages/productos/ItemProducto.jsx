import { Button } from "react-bootstrap";
import Swal from "sweetalert2";
import { borrarProductoAPI } from "../../../helpers/queries";
import { leerProductosAPI } from "../../../helpers/queries";
import { Link } from "react-router-dom";

const ItemProducto = ({ producto, setProductos }) => {
  const borrarProducto = () => {
    Swal.fire({
      title: "Estas seguro de eliminar el producto?",
      text: "No se puede revertir este proceso",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Borrar",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        // agregar logica si quiero borrar
        const respuesta = await borrarProductoAPI(producto.id);
        if (respuesta.status === 200) {
          Swal.fire({
            title: "Eliminado",
            text: `El producto ${producto.nombreProducto} fue eliminado`,
            icon: "success",
          });
          //actualizar tabla productos
          const productosActuales = await leerProductosAPI();
          setProductos(productosActuales);
        } else {
          Swal.fire({
            title: "Oops, ocurrió un error!",
            text: `El producto ${producto.nombreProducto} no pudo ser eliminado. Intente realizar esta operacion en unos minutos`,
            icon: "error",
          });
        }
      }
    });
  };

  return (
    <tr>
      <td>{producto.id}</td>
      <td>{producto.nombreProducto}</td>
      <td>{producto.precio}</td>
      <td>
        <img
          src={producto.imagen}
          alt={producto.nombreProducto}
          className="img-thumbnail w-50 h-50"
        />
      </td>
      <td>{producto.categoria}</td>
      <td className="d-flex">
        <Link
          to={"/administrador/editar/" + producto.id}
          className=" me-lg-2 btn btn-warning"
        >
          <i className="bi bi-trash"></i>
        </Link>
        <Button variant="danger" onClick={borrarProducto}>
          <i className="bi bi-pencil-square"></i>
        </Button>
      </td>
    </tr>
  );
};

export default ItemProducto;
