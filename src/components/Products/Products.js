import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import ProductDetails from "../ProductDetails/ProductDetails";

const Products = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  });
  return (
    <div>
      <Container>
        <div className="row mt-5">
          {product.map((pd) => (
            <ProductDetails pd={pd} key={pd._id}></ProductDetails>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Products;
