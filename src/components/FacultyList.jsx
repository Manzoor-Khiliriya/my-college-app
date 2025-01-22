import React, { useState, useEffect } from "react";
import { Grid, CircularProgress, Typography } from "@mui/material";
import FacultyCard from "./FacultyCard";

export default function FacultyList() {
  const [faculties, setFaculties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFaculties = async () => {
      try {
        const fetchedFaculties = [
          { id: 1, name: "Dr. John Doe", department: "Computer Science", bio: "Expert in AI and Machine Learning." },
          { id: 2, name: "Prof. Sarah Williams", department: "Business Administration", bio: "Specializes in Marketing and Management." },
          { id: 3, name: "Dr. Michael Smith", department: "Commerce", bio: "Focuses on Accounting and Taxation." },
          { id: 4, name: "Prof. Elizabeth Johnson", department: "Arts", bio: "Specializes in English Literature." },
          { id: 5, name: "Dr. David Brown", department: "Engineering", bio: "Expert in automation and robotics." },
          { id: 6, name: "Dr. Laura White", department: "Law", bio: "Expert in Law and Human Rights." },
          { id: 7, name: "Prof. James Taylor", department: "Science", bio: "Specializes in Environmental Science." },
          { id: 8, name: "Dr. Maria Garcia", department: "Hotel Management", bio: "Expert in hospitality and event planning." },
          { id: 9, name: "Dr. Ahmed Khan", department: "Health Sciences", bio: "Specializes in Ayurvedic medicine." },
        ];
        
        setFaculties(fetchedFaculties);
        setLoading(false);
      } catch  {
        setError("Failed to load faculties. Please try again later.");
        setLoading(false);
      }
    };

    fetchFaculties();
  }, []);

  if (loading) {
    return (
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        style={{ height: "100vh" }}
      >
        <CircularProgress />
      </Grid>
    );
  }

  if (error) {
    return (
      <Typography variant="h6" color="error" align="center">
        {error}
      </Typography>
    );
  }

  return (
    <Grid container spacing={2} sx={{ padding: 2 }}>
      {faculties.map((faculty) => (
        <FacultyCard key={faculty.id} faculty={faculty} />
      ))}
    </Grid>
  );
}

