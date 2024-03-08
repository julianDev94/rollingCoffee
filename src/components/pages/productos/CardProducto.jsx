import { Card, Button } from "react-bootstrap";
import imagenCafecito from "../../../assets/cafecitoAmericano.jpg";

const CardProducto = ({ producto }) => {
  return (
    <Card className="mx-1 w-100">
      <Card.Img variant="top" src={producto.imagen} />
      <Card.Body>
        <Card.Title>{producto.nombreProducto}</Card.Title>
        <Card.Text>
          {producto.descripcionBreve}
        </Card.Text>
        <Card.Text className="fw-bold">Precio: ${producto.precio}</Card.Text>
        <Card.Footer className="d-flex justify-content-end">
          <Button variant="success">Ver más</Button>
        </Card.Footer>
      </Card.Body>
    </Card>
  );
};

export default CardProducto;
