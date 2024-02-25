import { Button, Container } from "react-bootstrap";
import imagenError404 from "../../assets/error404.png";

const Error404 = () => {
  return (
    <section className="seccionMain mb-5">
      <Container className="d-flex flex-column align-items-center">
        <img
          src={imagenError404}
          alt="Imagen de error 404"
          className="img-fluid w-50"
        />
        <div>
          <Button variant="success">Volver a inicio</Button>
        </div>
      </Container>
    </section>
  );
};

export default Error404;
