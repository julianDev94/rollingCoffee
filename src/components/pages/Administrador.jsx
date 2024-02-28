import { Container, Table, Button } from "react-bootstrap";
import ItemProducto from "./productos/ItemProducto";
import { useEffect, useState } from "react";
import { leerProductosAPI } from "../../helpers/queries";
import { Link } from "react-router-dom";

const Administrador = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    consultarAPI();
  }, []);

  const consultarAPI = async () => {
    try {
      const respuesta = await leerProductosAPI();
      console.log(respuesta);
      setProductos(respuesta);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="seccionMain">
      <Container className="my-5">
        <div className="d-flex justify-content-between align-items-center">
          <h1 className="display-4">Productos disponibles</h1>
          <Link className="btn btn-primary" to="/administrador/crear">
            <i className="bi bi-file-earmark-plus"></i>
          </Link>
        </div>
        <Table striped bordered hover className="text-center">
          <thead>
            <tr>
              <th>Cod</th>
              <th>Producto</th>
              <th>Precio</th>
              <th>URL de Imagen</th>
              <th>Categoria</th>
              <th>Opciones</th>
            </tr>
          </thead>
          <tbody>
            {
              productos.map((producto)=> <ItemProducto producto={producto} key={producto.id}></ItemProducto>)
            }
          </tbody>
        </Table>
      </Container>
    </section>
  );
};

export default Administrador;
