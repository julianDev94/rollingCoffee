import { Container, Card, Button } from "react-bootstrap";
import imgDetalleProducto from "../../../assets/cafecito-detalle-producto.jpg";

const DetalleProducto = () => {
  return (
    <section className="seccionMain my-3">
      <Container>
        <Card className="d-flex flex-row">
          <Card.Img
            variant="top"
            src={imgDetalleProducto}
            className="img-fluid w-50"
          />
          <Card.Body>
            <Card.Title>Capuchino</Card.Title>
            <Card.Text>
              <p>
                El café americano tiende a tener un sabor más suave y menos
                intenso que el espresso puro debido a la dilución con agua
                caliente. Esto lo hace más parecido al café filtrado en términos
                de sabor y textura, aunque conserva algunas de las notas y
                características del espresso original.
              </p>
              <p>
                Categoria: Infusiones
              </p>
              <p>Precio: $1000</p>
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </section>
  );
};

export default DetalleProducto;
