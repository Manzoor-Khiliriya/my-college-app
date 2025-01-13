import React from "react";
import { useRouter } from "next/router";
import { Card, CardContent, Typography, Box, Button } from "@mui/material";
import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const courses = [
  { id: 1, title: "BBA", description: "Learn the fundamentals of React." },
  { id: 2, title: "BCOM", description: "Dive deep into JavaScript." },
  { id: 3, title: "BSC", description: "Learn server-side JavaScript." },
];

export default function CourseDetails() {
  const router = useRouter();
  const { courseId } = router.query;

  const course = courses.find((course) => course.id === Number(courseId));

  if (!course) return <Typography>Loading...</Typography>;

  return (
    <>
      <Box sx={{ maxWidth: 600, margin: "auto", marginTop: 3 }}>
        <Card>
          <CardContent>
            <Typography variant="h4" gutterBottom>
              {course.title}
            </Typography>
            <Typography variant="body1" paragraph>
              {course.description}
            </Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={() => router.push("/courses")}
            >
              Back to Courses
            </Button>
          </CardContent>
        </Card>
      </Box>
    </>
  );
}
