import { Button } from "react-bootstrap";
import Swal from "sweetalert2";
import { borrarProductoAPI } from "../../../helpers/queries";

const ItemProducto = ({ producto }) => {
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
        }else{
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
          className="img-thumbnail"
        />
      </td>
      <td>{producto.categoria}</td>
      <td className="d-flex">
        <Button variant="warning" className=" me-lg-2">
          <i className="bi bi-trash"></i>
        </Button>
        <Button variant="danger" onClick={borrarProducto}>
          <i className="bi bi-pencil-square"></i>
        </Button>
      </td>
    </tr>
  );
};

export default ItemProducto;
