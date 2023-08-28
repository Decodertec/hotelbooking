import GoogleIcon from "@mui/icons-material/Google";
import { Container, Grid, Button, TextField } from "@mui/material";
import { signInWithPopup } from "@firebase/auth";
import { auth, provider } from "../firebase";
import { useNavigate } from "react-router";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();
  const onLoginButton = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log("Result", result);
        const userName = result.user.displayName;
        navigate("/Home", {
          state: {
            userName,
          },
        });
      })
      .catch((error) => {
        console.log("Error", error);
      });

    // ToDo: Add firebase login code here
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (email === "sagar@gmail.com" && password === "12345") {
      navigate("/Home");
    } else {
      alert("Invalid email or password");
    }
  };
  return (
    <>
      <Container sx={{ mt: 10 }}>
        <Grid
          alignItems="center"
          justifyContent="center"
          container
          sx={{ heigth: "100vh" }}
        >
          <Grid item lg={12}>
            <TextField
              required
              id="outlined-required"
              label="Email"
              placeholder="xyz@email.com"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button onClick={handleLogin} variant="contained">
              Login
            </Button>
          </Grid>
        </Grid>
        <Grid
          alignItems="center"
          justifyContent="center"
          container
          sx={{ height: "100vh" }}
        >
          <Grid item>
            <button
              onClick={onLoginButton}
              style={{
                height: "40px",
                backgroundColor: "#1976d2",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                fontSize: "25px",
                padding: "5px",
                display: " flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <GoogleIcon sx={{ mr: 5 }} />
              <span>Login with google</span>
            </button>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
export default Login;
