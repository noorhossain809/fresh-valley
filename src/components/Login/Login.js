import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Button,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import { FiSquare } from 'react-icons/fi';
import './Login.css'

const Login = () => {
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <div className="p-5 m-5 ">
      <Container className="main_container">
        <div  className="container">
        <form action="">
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "40ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="standard-basic"
              label="Standard"
              variant="standard"
            />
          </Box>
          <FormControl sx={{ m: 1, width: "40ch" }} variant="standard">
            <InputLabel htmlFor="standard-adornment-password">
              Password
            </InputLabel>
            <Input
              id="standard-adornment-password"
              type={values.showPassword ? "text" : "password"}
              value={values.password}
              onChange={handleChange("password")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <div className="d-flex mt-2">
            <div className="col-md-6">
              <p><FiSquare /> Remember Me</p>
            </div>
            <div className="ms-auto">
              <Link>Forgot Password</Link>
            </div>
          </div>
          <Button sx={{ m: 1, width: "45ch" }} variant="contained" color="success">Login</Button>
        </form>
        </div>
        
      </Container>
    </div>
  );
};

export default Login;
