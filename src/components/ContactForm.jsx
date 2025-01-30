'use client'
import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useRouter } from "next/router";
import HeaderTypography from "./HeaderTypography";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    let validationErrors = {};

    if (!formData.name) validationErrors.name = "Name is required.";
    if (!formData.email) validationErrors.email = "Email is required.";
    else if (!emailRegex.test(formData.email)) validationErrors.email = "Please enter a valid email address.";
    if (!formData.message) validationErrors.message = "Message is required.";

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log("Form Submitted:", formData);
      setSubmitted(true);

      setTimeout(() => {
        router.push("/");
      }, 2000);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
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
        name="name"
        value={formData.name}
        onChange={handleChange}
        error={!!errors.name}
        helperText={errors.name}
      />

      <TextField
        label="Email"
        variant="outlined"
        fullWidth
        required
        type="email"
        placeholder="Your Email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        error={!!errors.email}
        helperText={errors.email}
      />

      <TextField
        label="Message"
        variant="outlined"
        fullWidth
        required
        multiline
        rows={4}
        placeholder="Your Message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        error={!!errors.message}
        helperText={errors.message}
      />

      <Button type="submit" variant="contained" color="primary" size="large">
        Send
      </Button>

      {submitted && (
        <Typography variant="body1" color="success.main" textAlign="center">
          Your message has been sent! Redirecting to the home page...
        </Typography>
      )}
    </Box>
  );
}
