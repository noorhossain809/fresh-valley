import React from "react";
import { Card, Container } from "react-bootstrap";
import { Button } from "@mui/material";
import './ProductDetails.css'
import { Link } from "react-router-dom";

const ProductDetails = (props) => {
  const { name, price, weight, imageURL, _id} = props.pd;
  return (
    <div className="col-md-3 mt-5 mb-3">
      <Container className="mt-5">
        <Card className="details" style={{ width: "15rem", }}>
          <Card.Body>
            <img src={imageURL} alt="" className="w-75 p-1 m-3" />
            <p>
              <strong>{name}</strong>
            </p>
            <Card.Subtitle className="mb-2 text-muted">
             <div className="d-flex p-2 ">
               <div className="col-md-6">
                 <p><strong>{price}</strong></p>
               </div>
               <div className="col-md-6">
                <Link className="button_link" to={"/orders/"+_id}> <Button variant="contained" color="success"><span>B</span><span className="text-lowercase">uy Now</span></Button></Link>
               </div>
             </div>
            </Card.Subtitle>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default ProductDetails;
