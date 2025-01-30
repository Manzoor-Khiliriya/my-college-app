'use client'
import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {
  Button,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { useRouter } from "next/router";
import HeaderTypography from "./HeaderTypography";

const courses = [
  { id: 1, title: "BCom" },
  { id: 2, title: "BBA" },
  { id: 3, title: "BSc" },
  { id: 4, title: "BA" },
  { id: 5, title: "BTech" },
  { id: 6, title: "BCA" },
  { id: 7, title: "LLB" },
  { id: 8, title: "BHM" },
  { id: 9, title: "BDS" },
];

export default function StudentsRegistration() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    course: "",
    phone: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    course: "",
    phone: "",
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
    const phoneRegex = /^[0-9]{10}$/;

    let validationErrors = {};

    if (!formData.name) validationErrors.name = "Name is required.";
    if (!formData.email) validationErrors.email = "Email is required.";
    else if (!emailRegex.test(formData.email)) validationErrors.email = "Please enter a valid email address.";
    if (!formData.course) validationErrors.course = "Course selection is required.";
    if (!formData.phone) validationErrors.phone = "Phone number is required.";
    else if (!phoneRegex.test(formData.phone)) validationErrors.phone = "Please enter a valid phone number.";

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
        p: 3,
        marginBlock: 4,
        borderRadius: 2,
        boxShadow: 3,
        backgroundColor: "#fff",
      }}
      autoComplete="off"
    >
      <HeaderTypography variant="h5" textAlign="center" gutterBottom>
        Students Registration Form
      </HeaderTypography>

      <TextField
        label="Name"
        name="name"
        variant="outlined"
        value={formData.name}
        onChange={handleChange}
        required
        error={!!errors.name}
        helperText={errors.name}
        aria-label="Name"
      />

      <TextField
        label="Email"
        name="email"
        variant="outlined"
        value={formData.email}
        onChange={handleChange}
        required
        error={!!errors.email}
        helperText={errors.email}
        aria-label="Email"
      />

      <FormControl required error={!!errors.course}>
        <InputLabel id="course-select-label">Preferred Course</InputLabel>
        <Select
          labelId="course-select-label"
          id="course-select"
          value={formData.course}
          label="Preferred Course *"
          onChange={handleChange}
          name="course"
        >
          {courses.map((course, index) => (
            <MenuItem key={index} value={course.title}>
              {course.title}
            </MenuItem>
          ))}
        </Select>
        {errors.course && (
          <Typography variant="body2" color="error" sx={{ marginTop: 1 }}>
            {errors.course}
          </Typography>
        )}
      </FormControl>

      <TextField
        label="Phone"
        name="phone"
        variant="outlined"
        value={formData.phone}
        onChange={handleChange}
        required
        error={!!errors.phone}
        helperText={errors.phone}
        aria-label="Phone"
      />

      <Button type="submit" variant="contained">
        Submit
      </Button>

      {submitted && (
        <Typography variant="body1" color="success.main" textAlign="center">
          Registration successful! Redirecting to the home page...
        </Typography>
      )}
    </Box>
  );
}
