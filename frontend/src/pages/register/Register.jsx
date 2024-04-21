import React from "react";
import "./register.scss";
import "../login/login.scss";
import Container from "react-bootstrap/Container";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { useState } from "react";

function Register() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });
  const { username, email, password, password2 } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const uppercaseRegex = /[A-Z]/;

    if (!username || username.length < 3 || username.length > 12) {
      console.log("Name must be between 3-12 characters.");
    } else if (!email) {
      console.log("Email is required.");
    } else if (!password || password.length < 6) {
      console.log("Password must be at least 6 symbols long.");
    } else if (!uppercaseRegex.test(password)) {
      console.log("Password must contain at least one capital letter.");
    } else if (password !== password2) {
      console.log("Password do not match!");
    } else {
      const userData = {
        username,
        email,
        password,
      };
      console.log(userData);
    }
  };

  return (
    <>
      <Container>
        <h2 id="login-title">Create your account</h2>
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
              autoComplete="off"
              value={email}
              onChange={onChange}
              name="email"
            />
            <TextField
              label="Username"
              variant="outlined"
              type="text"
              autoComplete="off"
              value={username}
              onChange={onChange}
              name="username"
            />
            <TextField
              label="Password"
              variant="outlined"
              type="password"
              autoComplete="off"
              value={password}
              onChange={onChange}
              name="password"
            />
            <TextField
              label="Confirm password"
              variant="outlined"
              type="password"
              autoComplete="off"
              value={password2}
              onChange={onChange}
              name="password2"
            />
          </Box>
          <Button variant="outlined" type="submit" id="submit-form">
            Register
          </Button>
        </form>
      </Container>
    </>
  );
}

export default Register;
