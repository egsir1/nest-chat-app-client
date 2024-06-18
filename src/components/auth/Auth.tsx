import { Button, Stack, TextField } from "@mui/material";
import React, { useState } from "react";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Stack
      spacing={3}
      sx={{
        height: "100vh",
        width: {
          xs: "70%",
          md: "30%",
        },
        margin: "0 auto",
        justifyContent: "center",
      }}
    >
      <TextField
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        type="email"
        label="Email"
        variant="outlined"
      />
      <TextField
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        type="password"
        label="Password"
        variant="outlined"
      />
      <Button variant="contained">Login</Button>
    </Stack>
  );
};

export default Auth;
