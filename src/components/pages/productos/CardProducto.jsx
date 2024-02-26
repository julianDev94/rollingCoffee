import { Card, Button } from "react-bootstrap";
import imagenCafecito from "../../../assets/cafecitoAmericano.jpg";
import { Link } from "react-router-dom";

const CardProducto = () => {
  return (
    <Card className="mx-1 w-100">
      <Card.Img variant="top" src={imagenCafecito} />
      <Card.Body>
        <Card.Title>Tipo de café</Card.Title>
        <Card.Text>
          Descripcion: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia labore ratione culpa libero reprehenderit commodi nesciunt vitae. Minus unde, cumque vel quos reprehenderit similique aliquid ullam in quas. Dolore, perspiciatis.
        </Card.Text>
        <Card.Text className="fw-bold">Precio: $100</Card.Text>
        <Card.Footer className="d-flex justify-content-end">
            <Button variant="success">Ver más</Button>
        </Card.Footer>
      </Card.Body>
    </Card>
  );
};

export default CardProducto;
