import imgBanner from "../../assets/banner.png";
import { Row, Col, Container } from "react-bootstrap";
import CardProducto from "./productos/CardProducto";
import { leerProductosAPI } from "../../helpers/queries";
import { useEffect, useState } from "react";

const Inicio = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    consultarProductos();
  }, []);

  const consultarProductos = async () => {
    try {
      const listaProductos = await leerProductosAPI();
      console.log("dentro del metodo consultar producto");
      //console.log(listaProductos);
      setProductos(listaProductos);
    } catch (error) {
      console.log(error);
    }
  };

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
          {Array.from({ length: productos.length }).map((_, idx) => (
            <Col key={idx}>
              {productos.map((producto) => (
                <CardProducto producto={producto} key={producto._id} />
              ))}
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Inicio;
