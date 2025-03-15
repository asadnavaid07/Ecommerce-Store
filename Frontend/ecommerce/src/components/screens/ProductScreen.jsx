import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../../slices/Singleproductslice";
import { Button, Card, Col, Container, ListGroup, ListGroupItem, Row,Image } from "react-bootstrap";
import { Link, useParams } from "react-router";
import Loader from "../Loader";
import Message from "../Message";
import Rating from "../Rating";


function ProductScreen() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { error, loading, product } = useSelector((state) => state.productDetails); 
  console.log(product)
  useEffect(() => {
    dispatch(fetchProduct(id));
  }, [dispatch, id]);
  
  return (
    <Container>
      <Link to="/" className="btn btn-dark my-3">Go Back</Link>
  
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : product ? (
        <Row>
          <Col md={6}>
            <Image src={`http://127.0.0.1:8000${product.image}`}  alt={product.name} fluid />
          </Col>
          <Col md={3}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h3>{product.productname}</h3>
              </ListGroup.Item>
              <ListGroup.Item>
                <Rating value={product.rating} text={`${product.numReview} reviews`} color={"#f8e825"} />
              </ListGroup.Item>
              <ListGroup.Item>Brand: {product.productbrand} </ListGroup.Item>
              <ListGroup.Item>Description: {product.productinfo}</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3}>
            <Card>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Row>
                    <Col>Price:</Col>
                    <Col><strong>{product.price} Rs</strong></Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Status:</Col>
                    <Col>{product.stockcount > 0 ? "In Stock" : "Out of Stock"}</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Button className="btn-block btn-success" disabled={product.stockcount === 0} type="button">
                    Add to Cart
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      ) : (
        <Message variant="warning">Product not found</Message>
      )}
    </Container>
  );
  
};

export default ProductScreen;
