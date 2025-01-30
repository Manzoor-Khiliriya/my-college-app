import React from "react";
import Link from "next/link";
import {  Card, CardContent, Typography, Button } from "@mui/material";
import Grid from "@mui/material/Grid2";

export default function FacultyCard({ faculty }) {
  return (
    <Grid size={{xs:12 ,sm:6, md:4}} key={faculty.id}>
      <Card sx={{ boxShadow: 3 }}>
        <CardContent>
          <Typography variant="h5" component="div" gutterBottom>
            {faculty.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Department: {faculty.department}
          </Typography>
          <Typography variant="body2" color="text.secondary" paragraph>
            Bio: {faculty.bio}
          </Typography>
          <Link href={`/faculties/${faculty.id}`} passHref>
            <Button variant="contained" color="primary">
              View Profile
            </Button>
          </Link>
        </CardContent>
      </Card>
    </Grid>
  );
}
