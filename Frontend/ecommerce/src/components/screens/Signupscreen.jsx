import { Container, Form, Button, Row, Col, Card, Alert, Spinner } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { signup } from "../../store/slices/Signupslices"; 


const schema = yup.object().shape({
  fname: yup.string().required("First name is required"),
  lname: yup.string().required("Last name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});



function SignupScreen() {
  const {register,handleSubmit,formState:{errors}}=useForm({
    resolver:yupResolver(schema)
  
  })
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const {loading,error}=useSelector(
    (state)=>state.signup
  )

  const onSubmit = async (userData) => {
    const result = await dispatch(signup(userData)); // Dispatch signup action
    if (signup.fulfilled.match(result)) {
      navigate("/login"); // Redirect on success
    }
  };
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");
  // const [error, setError] = useState(null);
  // const [loading, setLoading] = useState(false);
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setError(null);

  //   if (password !== confirmPassword) {
  //     setError("Passwords do not match!");
  //     return;
  //   }

  //   setLoading(true);

  //   // Simulate API call
  //   setTimeout(() => {
  //     setLoading(false);
  //     navigate('/login')
  //   }, 2000);
  // };
  return (
    <Container className="mt-5">
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          <Card className="p-4 shadow">
            <h2 className="text-center">Sign Up</h2>

            {error && <Alert variant="danger">{error}</Alert>}

            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group controlId="fname">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter first name"
                  {...register("fname")}
                  isInvalid={!!errors.fname}
                />
                <Form.Control.Feedback type="invalid">{errors.fname?.message}</Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="lname" className="mt-3">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter last name"
                  {...register("lname")}
                  isInvalid={!!errors.lname}
                />
                <Form.Control.Feedback type="invalid">{errors.lname?.message}</Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="email" className="mt-3">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  {...register("email")}
                  isInvalid={!!errors.email}
                />
                <Form.Control.Feedback type="invalid">{errors.email?.message}</Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="password" className="mt-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter password"
                  {...register("password")}
                  isInvalid={!!errors.password}
                />
                <Form.Control.Feedback type="invalid">{errors.password?.message}</Form.Control.Feedback>
              </Form.Group>

              <Button type="submit" variant="primary" className="mt-4 w-100" disabled={loading}>
                {loading ? <Spinner animation="border" size="sm" /> : "Sign Up"}
              </Button>
            </Form>

            <div className="mt-3 text-center">
              Already have an account? <Link to="/login">Login</Link>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default SignupScreen;