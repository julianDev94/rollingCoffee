import { Container, Table, Button } from "react-bootstrap";
import ItemProducto from "./productos/ItemProducto";
import { useEffect, useState } from "react";
import { leerProductosAPI } from "../../helpers/queries";

const Administrador = () => {

  const [productos, setProductos] = useState([]);

  useEffect(()=>{
    console.log(leerProductosAPI());
  },[]);

  return (
    <section className="seccionMain">
      <Container className="my-5">
        <div className="d-flex justify-content-between align-items-center">
          <h1 className="display-4">Productos disponibles</h1>
          <Button variant="primary"><i className="bi bi-file-earmark-plus"></i></Button>
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
            <ItemProducto />
            <ItemProducto />
            <ItemProducto />
          </tbody>
        </Table>
      </Container>
    </section>
  );
};

export default Administrador;
