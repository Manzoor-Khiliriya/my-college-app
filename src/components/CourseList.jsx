import React from "react";
import CourseCard from "./CourseCard";
import { Grid } from "@mui/material";

export default function CourseList() {
  const courses = [
    {
      "id": 1,
      "title": "BCom",
      "description": "A three-year undergraduate degree focused on commerce, accounting, economics, and finance, preparing students for careers in business, finance, and accounting."
    },
    {
      "id": 2,
      "title": "BBA",
      "description": "An undergraduate degree that covers business management, marketing, human resources, and entrepreneurship, ideal for those seeking managerial roles or pursuing an MBA."
    },
    {
      "id": 3,
      "title": "BSc",
      "description": "An undergraduate program focused on scientific subjects such as Physics, Chemistry, Biology, and Mathematics, leading to careers in research, healthcare, technology, and education."
    },
    {
      "id": 4,
      "title": "BA",
      "description": "A liberal arts degree that covers subjects like English, History, Sociology, and Political Science, focusing on critical thinking, writing, and communication skills."
    },
    {
      "id": 5,
      "title": "BTech",
      "description": "An undergraduate degree in engineering and technology, offering specializations in fields like Civil, Mechanical, Electrical, and Computer Science."
    },
    {
      "id": 6,
      "title": "BCA",
      "description": "An undergraduate degree that focuses on computer science, programming, and software development, preparing students for careers in IT, software development, and networking."
    },
    {
      "id": 7,
      "title": "LLB",
      "description": "An undergraduate degree in law that provides foundational knowledge in legal principles, governance, and ethics, preparing students for careers in law and legal practice."
    },
    {
      "id": 8,
      "title": "BHM",
      "description": "An undergraduate degree in hospitality management that covers subjects like hotel operations, customer service, food & beverage management, and tourism."
    },
    {
      "id": 9,
      "title": "BDS",
      "description": "An undergraduate program in dentistry that trains students to become dental professionals, focusing on oral health, dental treatments, and surgical procedures."
    }
  ]
  
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
