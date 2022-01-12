import React from "react";
import {
  Container,
  FormControl,
  InputGroup,
  Nav,
  Navbar,
} from "react-bootstrap";
import logo from "../../images/Group 33072.png";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { purple } from "@mui/material/colors";
import { Link } from "react-router-dom";

import { BiSearch, } from 'react-icons/bi';
import { alpha, InputBase } from "@mui/material";
import './Header.css'



const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[500],
  "&:hover": {
    backgroundColor: purple[700],
  },
}));

const Header = () => {
  return (
    <div>
      <div className="top_header">
        <Navbar expand="lg">
          <Container>
            <Navbar.Brand href="#home">
              <img className="w-25" src={logo} alt="logo-img " />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto gap-3 mt-2">
                <Link className="branding_link" to="/home">
                  <strong>Home</strong>
                </Link>
                <Link className="branding_link" to="/orders">
                  <strong>Orders</strong>
                </Link>
                <Link className="branding_link" to="/admin">
                  <strong>Admin</strong>
                </Link>
                <Link className="branding_link" to="/details">
                  <strong>Details</strong>
                </Link>
                <Stack spacing={2} direction="row">
                  <Link to="/login" className="text-decoration-none"><Button variant="contained" color="success">Login</Button></Link>
                </Stack>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      
      
    </div>
  );
};

export default Header;
