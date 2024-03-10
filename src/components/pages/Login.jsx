import { Container } from "react-bootstrap";
import { Form, Col, Button, Card } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { logicaLogin } from "../../helpers/queries";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";
const Login = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (usuario) => {
    console.log(usuario);
    if(logicaLogin(usuario)){
      Swal.fire({
        title: "Usuario logueado",
        text: `Bienvenido ${usuario.email}`,
        icon: "success",
      });
      navigate("/administrador");
    }else{
      Swal.fire({
        title: "Ops! ocurrio un error",
        text: `Email o password incorrectos!`,
        icon: "error",
      });
    }
  };

  return (
    <section className="seccionMain">
      <Container>
        <Card>
          <Card.Header>Login</Card.Header>
          <Card.Body>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group as={Col} className="mb-3">
                <Form.Label column sm="2">
                  Email
                </Form.Label>
                <Col sm="10">
                  <Form.Control
                    type="email"
                    placeholder="ejemplo@pepito.com"
                    {...register("email", {
                      required: "El email es requerido",
                      pattern: {
                        value:
                          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                        message: "Por favor ingrese un email válido",
                      },
                    })}
                  />
                  <Form.Text className="text-danger">
                      {errors.email?.message}
                  </Form.Text>
                </Col>
              </Form.Group>

              <Form.Group as={Col} className="mb-3">
                <Form.Label column sm="2">
                  Password
                </Form.Label>
                <Col sm="10">
                  <Form.Control
                    type="password"
                    placeholder="Contraseña"
                    {...register("password", {
                      required: "La contraseña es requerida",
                      pattern: {
                        value: /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/,
                        message:
                          "Por favor ingrese una contraseña válida que contenga digitos, minúsculas y mayúsculas",
                      },
                      minLength: {
                        value: 8,
                        message:
                          "Por favor ingrese mas de 8 caracteres, ya sea números o letras",
                      },
                      maxLength: {
                        value: 12,
                        message:
                          "Por favor ingrese menos de 12 caracteres, ya sea números o letras",
                      },
                    })}
                  />
                  <Form.Text className="text-danger">
                      {errors.password?.message}
                  </Form.Text>
                </Col>
              </Form.Group>
              <Button variant="primary" type="submit">
                Ingresar
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </section>
  );
};

export default Login;
