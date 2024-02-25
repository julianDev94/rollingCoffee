import imgBanner from "../../assets/banner.png";
import { Row, Col, Container } from "react-bootstrap";
import CardProducto from "./productos/CardProducto";

const Inicio = () => {
  return (
    <section className="seccionMain">
      <img
        src={imgBanner}
        alt="imagen de banner"
        className="object-fit-cover banner w-100"
      />
      <Container className="my-3">
        <h1 className="display-2">Nuestros Productos</h1>
        <Row xs={1} md={3} className="g-4">
          {Array.from({ length: 4 }).map((_, idx) => (
            <Col key={idx}>
              <CardProducto />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Inicio;
