import { Container } from "react-bootstrap";
import { Form, Col, Button } from "react-bootstrap";
import {useForm} from 'react-hook-form';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const validarUsuario = (usuario) => {
    console.log(usuario);
  };

  return (
    <section className="seccionMain">
      <Container className="border border-dark rounded p-3">
        <Form onSubmit={handleSubmit(validarUsuario)}>
          <h3>Login</h3>
          <Form.Group as={Col} className="mb-3">
            <Form.Label column sm="2">
              Email
            </Form.Label>
            <Col sm="10">
              <Form.Control
                type="email"
                placeholder="ejemplo@pepito.com"
                {...register("email",{
                  required: "El email es requerido",
                  pattern:{
                    value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    message: "Por favor ingrese un email válido"
                  }
                })}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Col} className="mb-3">
            <Form.Label column sm="2">
              Password
            </Form.Label>
            <Col sm="10">
              <Form.Control type="password" placeholder="Contraseña" {...register("password", {
                required: "La contraseña es requerida",
                minLength: {
                  value: 8,
                  message: "Por favor ingrese mas de 8 caracteres, ya sea números o letras"
                },
                maxLength:{
                  value: 12,
                  message: "Por favor ingrese menos de 12 caracteres, ya sea números o letras"
                }
              })}/>
            </Col>
          </Form.Group>
          <Button variant="primary" type="submit">
            Ingresar
          </Button>
        </Form>
      </Container>
    </section>
  );
};

export default Login;
