import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import { useParams } from "react-router-dom";

const Orders = () => {
  const { id } = useParams();
  console.log(id);

  const [order, setOrder] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/product/${id}`)
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, []);
  return (
    <div className="mt-5">
      
      <Container>
      <h2>Checkout</h2>
        <Table hover className="mt-5 bg-light">
          <thead>
            <tr>
              <th>#</th>
              <th>Description</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>{order.name}</td>
              <td>{order.weight}</td>
              <td>{order.price}</td>
            </tr>
            
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default Orders;
