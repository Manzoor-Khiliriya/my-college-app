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
  {
    id: 1,
    title: "BCom",
  },
  {
    id: 2,
    title: "BBA",
  },
  {
    id: 3,
    title: "BSc",
  },
  {
    id: 4,
    title: "BA",
  },
  {
    id: 5,
    title: "BTech",
  },
  {
    id: 6,
    title: "BCA",
  },
  {
    id: 7,
    title: "LLB",
  },
  {
    id: 8,
    title: "BHM",
  },
  {
    id: 9,
    title: "BDS",
  },
];

export default function StudentsRegistration() {
  const [formData, setFormData] = useState({
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
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.course && formData.phone) {
      console.log("Form Submitted:", formData);
      setSubmitted(true);

      setTimeout(() => {
        router.push("/");
      }, 2000);
    } else {
      alert("Please fill in all required fields.");
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
        aria-label="Name"
      />

      <TextField
        label="Email"
        name="email"
        variant="outlined"
        value={formData.email}
        onChange={handleChange}
        required
        aria-label="Email"
      />

      <FormControl required>
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
            <MenuItem key={index} value={course}>
              {course.title}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <TextField
        label="Phone"
        name="phone"
        variant="outlined"
        value={formData.phone}
        onChange={handleChange}
        required
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
