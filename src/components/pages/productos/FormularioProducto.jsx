import { Container, Form, Button } from "react-bootstrap";

const FormularioProducto = () => {
  return (
    <section className="seccionMain">
      <Container className="my-3 ">
        <h1 className="display-2">Nuevo producto</h1>
        <hr />
        <Form>
          <Form.Group className="mb-3" controlId="formBasicProducto">
            <Form.Label>Producto</Form.Label>
            <Form.Control type="text" placeholder="Ej: Café" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPrecio">
            <Form.Label>Precio</Form.Label>
            <Form.Control type="number" placeholder="Ej: 50" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Imagen URL</Form.Label>
            <Form.Control
              type="url"
              placeholder="Ej: https://www.pexels.com/es-es/vans-en-blanco-y-negro-fuera-de-la-decoracion-para-colgar-en-la-pared-"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Categoría</Form.Label>
            <Form.Select aria-label="Default select example">
              <option>Seleccione una opción</option>
              <option value="1">One</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Descripción breve</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: Una taza de café suave y aromático."
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Descripción Amplia</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: el café americano es una variante de café que se distingue por su preparación y su sabor. Aquí tienes una descripción amplia:

            Preparación:
            El café americano se prepara diluyendo espresso con agua caliente. A diferencia del café expreso, que se extrae bajo presión, el café americano se obtiene agregando agua caliente al espresso, lo que resulta en una bebida más suave y menos concentrada."
            />
          </Form.Group>
          <Button variant="success" type="submit">
            Guardar
          </Button>
        </Form>
      </Container>
    </section>
  );
};

export default FormularioProducto;
