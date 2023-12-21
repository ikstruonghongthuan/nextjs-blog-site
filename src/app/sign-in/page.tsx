"use client";
import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import layout from "../layout.module.scss";
import { authenticate } from "@/lib/action";

const SignIn = () => {
  const [error, setError] = React.useState("");

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();

    authenticate(
      (document.getElementById("email") as HTMLInputElement).value,
      (document.getElementById("password") as HTMLInputElement).value
    );

    // const result = await signIn("credentials", {
    //   email: (document.getElementById("email") as HTMLInputElement).value,
    //   password: (document.getElementById("password") as HTMLInputElement).value,
    //   callbackUrl: callbackUrl ?? "/auth",
    //   redirect: false,
    // });

    // if (result?.error) {
    //   setError(result.error);
    // }

    // if (result?.ok) {
    //   router.push(callbackUrl);
    // }
  };

  return (
    <Container
      component="main"
      fixed
      disableGutters
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: `calc(100vh - ${layout["top-nav-height"]})`,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          background: "white",
          padding: "24px",
          borderRadius: "20px",
        }}
      >
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <p className="text-red-500">{error}</p>
        </Box>
      </Box>
    </Container>
  );
};

export default SignIn;
