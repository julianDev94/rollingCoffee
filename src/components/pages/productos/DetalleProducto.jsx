import { Container, Card, Button } from "react-bootstrap";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { obtenerProductoID } from "../../../helpers/queries";
const DetalleProducto = () => {
  const [producto, setProducto] = useState({});
  const { id } = useParams();

  useEffect(() => {
    detalleProducto();
  }, []);

  const detalleProducto = async () => {
    try {
      const respuestaProducto = await obtenerProductoID(id);

      if (respuestaProducto.status === 200) {
        const productoEncontrado = await respuestaProducto.json();
        setProducto(productoEncontrado);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="seccionMain my-3">
      <Container>
        <Card className="d-flex flex-row">
          <Card.Img
            variant="top"
            src={producto.imagen}
            className="img-fluid w-50"
          />
          <Card.Body>
            <Card.Title>{producto.nombreProducto}</Card.Title>
            <Card.Text>
              <p>{producto.descripcionAmplia}</p>
              <p>Categoria: {producto.categoria}</p>
              <p>Precio: {producto.precio}</p>
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </section>
  );
};

export default DetalleProducto;
