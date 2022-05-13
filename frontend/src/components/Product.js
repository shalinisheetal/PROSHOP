import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import Rating from "./Rating";

// Each product card in home screen
const Product = ({ product }) => {
  return (
    <Card className="my-2 p-3 rounded card">
      {/* Links used because it is a single page application, so no reloading */}
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant="top"></Card.Img>
      </Link>
      <Card.Body>
        <Link to={`/product/${product._id}`} className="links">
          <Card.Title as="div">
            <strong>{product.name} </strong>
          </Card.Title>
        </Link>

        <Card.Text as="div">
          <Rating
            value={product.rating}
            text={
              ` ${product.numReviews} review` +
              (product.numReviews === 1 ? "" : "s")
            }
          />
        </Card.Text>

        <Card.Text as="h3">${product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
