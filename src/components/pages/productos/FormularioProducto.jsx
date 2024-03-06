import { Container, Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

const FormularioProducto = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const productoValidado = (producto) => {
    console.log(producto);
  };

  return (
    <section className="seccionMain">
      <Container className="my-3 ">
        <h1 className="display-2">Nuevo producto</h1>
        <hr />
        <Form onSubmit={handleSubmit(productoValidado)}>
          <Form.Group className="mb-3" controlId="formBasicProducto">
            <Form.Label>Producto</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: Café"
              {...register("nombreProducto", {
                required: "El nombre del producto es obligatorio",
                minLength: {
                  value: 2,
                  message:
                    "El nombre del producto debe tener como minimo 2 caracteres",
                },
                maxLength: {
                  value: 30,
                  message:
                    "El nombre del producto debe tener como maximo 30 caracteres",
                },
              })}
            />
            <Form.Text className="text-danger">
              {errors.nombreProducto?.message}
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPrecio">
            <Form.Label>Precio</Form.Label>
            <Form.Control
              type="number"
              placeholder="Ej: 50"
              {...register("precio", {
                required: "El precio del producto es requerido",
                min: {
                  value: 50,
                  message: "El precio del producto debe ser mayor a 50 pesos",
                },
                max: {
                  value: 10000,
                  message:
                    "El precio del producto debe ser menor a 10000 pesos",
                },
              })}
            />
            <Form.Text className="text-danger">
              {errors.precio?.message}
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Imagen URL</Form.Label>
            <Form.Control
              type="url"
              placeholder="Ej: https://www.pexels.com/es-es/vans-en-blanco-y-negro-fuera-de-la-decoracion-para-colgar-en-la-pared-"
              {...register("imagen", {
                required: "La imagen del producto es requerida",
                pattern: {
                  value: /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/,
                  message: "Porfavor ingrese una dirección de imagen válida",
                },
              })}
            />
            <Form.Text className="text-danger">
              {errors.imagen?.message}
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Categoría</Form.Label>
            <Form.Select
              aria-label="Default select example"
              {...register("categoria",{
                required: "Por favor elija alguna opcion"
              })}
            >
              <option>Elija una opcion  </option>
              <option value="Infusiones">Infusiones</option>
            </Form.Select>
            <Form.Text className="text-danger">
              {errors.categoria?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicDescripBreve">
            <Form.Label>Descripción breve</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: Una taza de café suave y aromático."
              {...register("descripcionBreve", {
                required: "Por favor ingrese una descripción breve",
                minLength: {
                  value: 5,
                  message: "Ingrese una descripcion mayor a 5 caracteres",
                },
                maxLength: {
                  value: 100,
                  message: "Ingrese una descripción menor a 100 caracteres",
                },
              })}
            />
            <Form.Text className="text-danger">
              {errors.descripcionBreve?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Descripción Amplia</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: el café americano es una variante de café que se distingue por su preparación y su sabor. Aquí tienes una descripción amplia:

            Preparación:
            El café americano se prepara diluyendo espresso con agua caliente. A diferencia del café expreso, que se extrae bajo presión, el café americano se obtiene agregando agua caliente al espresso, lo que resulta en una bebida más suave y menos concentrada."
              {...register("descripcionAmplia", {
                required:
                  "Por favor ingrese una descripción amplia del producto",
                minLength: {
                  value: 50,
                  message:
                    "Ingrese como mínimo una descripcion de 50 caracteres del producto",
                },
                maxLength: {
                  value: 300,
                  message:
                    "Ingrese como máximo una descripción de 300 caracteres del producto",
                },
              })}
            />
            <Form.Text className="text-danger">
              {errors.descripcionAmplia?.message}
            </Form.Text>
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
