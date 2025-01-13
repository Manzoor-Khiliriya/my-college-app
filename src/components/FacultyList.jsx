import React from "react";
import { Grid } from "@mui/material";
import FacultyCard from "./FacultyCard";

export default function FacultyList() {
  const faculties = [
    {
      id: 1,
      name: "Dr. John Doe",
      department: "Computer Science",
      bio: "Expert in Software Engineering.",
    },
    {
      id: 2,
      name: "Dr. Jane Smith",
      department: "Mathematics",
      bio: "Specialist in Algebra and Calculus.",
    },
    {
      id: 3,
      name: "Dr. Mike Johnson",
      department: "Physics",
      bio: "Focused on Astrophysics and Quantum Mechanics.",
    },
  ];
  return (
    <>
      <Grid container spacing={4} sx={{ marginBlock: 2 }}>
        {faculties.map((faculty) => (
          <FacultyCard key={faculty.id} faculty={faculty} />
        ))}
      </Grid>
    </>
  );
}
