import { Container, Form, Button, Row, Col, Card, Alert, Spinner } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { login } from "../../store/slices/Loginslices"; // Import the async thunk
import { useEffect } from "react";


const schema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});



function loginScreen() {
  const {register,handleSubmit,formState:{errors}}=useForm({
    resolver:yupResolver(schema)
  
  })
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const {loading,error,user}=useSelector(
    (state)=>state.login
  )
useEffect(()=>{
  if (user) {
    navigate("/");
  }
},[user,navigate])
 

  const onSubmit = async (userData) => {
    const result = await dispatch(login(userData)); 
    console.log(result)
    if (login.fulfilled.match(result)) {
      navigate("/"); 
    }
  };
  return (
    <Container className="mt-5">
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          <Card className="p-4 shadow">
            <h2 className="text-center">Login</h2>

            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit(onSubmit)}>
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
                {loading ? <Spinner animation="border" size="sm" /> : "Login"}
              </Button>
            </Form>

            <div className="mt-3 text-center">
              New User? <Link to="/signup">Signup</Link>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default loginScreen;