import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import { useDispatch } from "react-redux";
import { postProductThunk } from "../../store/products/actions";

export default function AddProduct() {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [imageUrl, setImageUrl] = useState("");

  function submitForm(event) {
    event.preventDefault();
    console.log(name, description, price, imageUrl);
    dispatch(postProductThunk(name, description, price, imageUrl));
  }

  return (
    <Container>
      <Form as={Col} md={{ span: 6, offset: 3 }} className="mt-5">
        <h1 className="mt-5 mb-5">Add Product</h1>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            value={name}
            onChange={event => setName(event.target.value)}
            type="text"
            placeholder="Product name"
            required
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Description</Form.Label>
          <Form.Control
            value={description}
            onChange={event => setDescription(event.target.value)}
            type="text"
            placeholder="Describe this product"
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Price</Form.Label>
          <Form.Control
            value={price}
            onChange={event => setPrice(event.target.value)}
            type="number"
            required
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Image Url</Form.Label>
          <Form.Control
            value={imageUrl}
            onChange={event => setImageUrl(event.target.value)}
            type="text"
          />
        </Form.Group>
        <Form.Group className="mt-5">
          <Button variant="primary" type="submit" onClick={submitForm}>
            Add this product you capitalist pig
          </Button>
        </Form.Group>
      </Form>
    </Container>
  );
}
