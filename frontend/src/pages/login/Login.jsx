import React from "react";
import "./login.scss";
import Container from "react-bootstrap/Container";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { useState } from "react";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email) {
      console.log("Email is required.");
    } else if (!password) {
      console.log("Password is required.");
    } else {
      const userData = {
        email,
        password,
      };
      console.log(userData);
    }
  };

  return (
    <>
      <Container>
        <h2 id="login-title">Sign in to your account</h2>
        <form id="login-form" onSubmit={handleSubmit}>
          <Box
            component="div"
            sx={{
              "& > :not(style)": { mb: 3, width: "100%" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              label="Email"
              variant="outlined"
              type="email"
              autoComplete="email"
              value={email}
              onChange={onChange}
              name="email"
            />
            <TextField
              label="Password"
              variant="outlined"
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={onChange}
              name="password"
            />
          </Box>
          <Button variant="outlined" type="submit" id="submit-form">
            Login
          </Button>
        </form>
      </Container>
    </>
  );
}

export default Login;
