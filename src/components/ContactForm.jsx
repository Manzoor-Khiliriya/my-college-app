import React from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import HeaderTypography from "./HeaderTypography";


export default function ContactForm() {
  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
        maxWidth: 600,
        margin: "auto",
        marginBlock: 4,
        p: 3,
        borderRadius: 2,
        boxShadow: 3,
        backgroundColor: "#fff",
      }}
      noValidate
      autoComplete="off"
    >
      <HeaderTypography>Contact Us</HeaderTypography>
      <Typography variant="h6" textAlign="center" gutterBottom>
              We would love to hear from you! Please fill out the form below to
              get in touch.
            </Typography>
      <TextField
        label="Name"
        variant="outlined"
        fullWidth
        required
        placeholder="Your Name"
      />

      <TextField
        label="Email"
        variant="outlined"
        fullWidth
        required
        type="email"
        placeholder="Your Email"
      />

      <TextField
        label="Message"
        variant="outlined"
        fullWidth
        required
        multiline
        rows={4}
        placeholder="Your Message"
      />

      <Button
        variant="contained"
        color="primary"
        size="large"
      >
        Send
      </Button>
    </Box>
  );
}
