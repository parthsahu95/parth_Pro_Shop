import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import Rating from "./Rating";
import { LinkContainer } from "react-router-bootstrap";

const Product = ({ product }) => {
  return (
    <Card className="my-3 rounded">
      <Link to={`product/${product._id}`}>
        <Card.Img src={product.image} variant="top" />
      </Link>

      <Card.Body>
        <LinkContainer to={`/product/${product._id}`}>
          <Card.Title as="div">
            <b>{product.name}</b>
          </Card.Title>
        </LinkContainer>

        <Card.Text as="div">
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>

        <Card.Text as="h4">Rs. {product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
