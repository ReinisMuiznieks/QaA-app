import React, { useState } from "react";
import "../login/login.scss";
import Container from "react-bootstrap/Container";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import FormHelperText from "@mui/material/FormHelperText";
import { useNavigate, Link } from "react-router-dom";
import AuthService from "../../features/AuthService";

function Register() {
  const navigate = useNavigate();
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

  const [usernameError, setUsernameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [password2Error, setPassword2Error] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const uppercaseRegex = /[A-Z]/;

    if (!username || username.length < 3 || username.length > 12) {
      setUsernameError(true);
    } else {
      setUsernameError(false);
    }

    if (!email) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }

    if (!password || password.length < 6) {
      setPasswordError(true);
    } else if (!uppercaseRegex.test(password)) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }

    if (password !== password2) {
      setPassword2Error(true);
    } else {
      setPassword2Error(false);
    }

    if (
      username &&
      email &&
      password &&
      password2 &&
      !passwordError &&
      !password2Error &&
      !emailError &&
      !usernameError
    ) {
      const userData = {
        username,
        email,
        password,
      };

      try {
        await AuthService.register(username, email, password);

        console.log("User registered successfully");
        navigate("/");
      } catch (error) {
        console.error("Error registering user:", error.message);
      }
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
              "& > :not(style)": { mb: 2, width: "100%" },
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
            {emailError && (
              <FormHelperText id="component-error-text">
                Email is required.
              </FormHelperText>
            )}
            <TextField
              label="Username"
              variant="outlined"
              type="text"
              autoComplete="off"
              value={username}
              onChange={onChange}
              name="username"
            />
            {usernameError && (
              <FormHelperText id="component-error-text">
                Name must be between 3-12 characters.
              </FormHelperText>
            )}
            <TextField
              label="Password"
              variant="outlined"
              type="password"
              autoComplete="off"
              value={password}
              onChange={onChange}
              name="password"
            />
            {passwordError && (
              <FormHelperText id="component-error-text">
                Password must be at least 6 symbols long and contain at least
                one capital letter.
              </FormHelperText>
            )}
            <TextField
              label="Confirm password"
              variant="outlined"
              type="password"
              autoComplete="off"
              value={password2}
              onChange={onChange}
              name="password2"
            />
            {password2Error && (
              <FormHelperText id="component-error-text">
                Passwords do not match.
              </FormHelperText>
            )}
          </Box>
          <Button variant="outlined" type="submit" id="submit-form">
            Register
          </Button>
          <div className="underform-text">
            Already have an account? <a href="/login">Log In</a>
          </div>
        </form>
      </Container>
    </>
  );
}

export default Register;
