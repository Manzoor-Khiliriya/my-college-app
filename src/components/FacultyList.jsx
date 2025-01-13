import React from "react";
import { Grid } from "@mui/material";
import FacultyCard from "./FacultyCard";

export default function FacultyList() {
  const faculties = [
    {
      "id": 1,
      "name": "Dr. John Doe",
      "department": "Computer Science",
      "bio": "Expert in AI and Machine Learning."
    },
    {
      "id": 2,
      "name": "Prof. Sarah Williams",
      "department": "Business Administration",
      "bio": "Specializes in Marketing and Management."
    },
    {
      "id": 3,
      "name": "Dr. Michael Smith",
      "department": "Commerce",
      "bio": "Focuses on Accounting and Taxation."
    },
    {
      "id": 4,
      "name": "Prof. Elizabeth Johnson",
      "department": "Arts",
      "bio": "Specializes in English Literature."
    },
    {
      "id": 5,
      "name": "Dr. David Brown",
      "department": "Engineering",
      "bio": "Expert in automation and robotics."
    },
    {
      "id": 6,
      "name": "Dr. Laura White",
      "department": "Law",
      "bio": "Focuses on Constitutional Law and Human Rights."
    },
    {
      "id": 7,
      "name": "Prof. James Taylor",
      "department": "Science",
      "bio": "Specializes in Environmental Science."
    },
    {
      "id": 8,
      "name": "Dr. Maria Garcia",
      "department": "Hotel Management",
      "bio": "Expert in hospitality and event planning."
    },
    {
      "id": 9,
      "name": "Dr. Ahmed Khan",
      "department": "Health Sciences",
      "bio": "Specializes in Ayurvedic medicine."
    }
  ]
  
  
  return (
    <>
      <Grid container spacing={2} sx={{ marginBlock: 2 }}>
        {faculties.map((faculty) => (
          <FacultyCard key={faculty.id} faculty={faculty} />
        ))}
      </Grid>
    </>
  );
}
