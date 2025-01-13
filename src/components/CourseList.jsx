import React from "react";
import CourseCard from "./CourseCard";
import { Grid } from "@mui/material";
import CourseDetails from "../pages/courses/[courseId]";

export default function CourseList() {
  const courses = [
    { id: 1, title: "BBA", description: "Learn the fundamentals of React." },
    { id: 2, title: "BCOM", description: "Dive deep into JavaScript." },
    { id: 3, title: "BSC", description: "Learn server-side JavaScript." },
  ];
  return (
    <Grid container spacing={2} sx={{ marginBlock: 2 }}>
      {courses.map((course) => (
        <>
          <CourseCard key={course.id} course={course} />
        </>
      ))}
    </Grid>
  );
}
