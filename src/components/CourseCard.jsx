'use client'
import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import Link from "next/link";

export default function CourseCard({ course }) {
  return (
    <Grid size={{xs:12, sm:6, md:4}} key={course.id}>
      <Card sx={{ boxShadow: 3 }}>
        <CardContent>
          <Typography variant="h5" component="div" gutterBottom>
            {course.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {course.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Link href={`/courses/${course.id}`} passHref>
            <Button variant="contained" color="primary">
              Learn More
            </Button>
          </Link>
        </CardActions>
      </Card>
    </Grid>
  );
}
