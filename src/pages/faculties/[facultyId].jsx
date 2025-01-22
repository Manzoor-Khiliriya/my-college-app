import { useRouter } from "next/router";
import { Card, CardContent, Typography, Box, Button, CircularProgress } from "@mui/material";
import Head from "next/head";

const faculties = [
  {
    id: 1,
    name: "Dr. John Doe",
    department: "Computer Science",
    bio: "Expert in Software Engineering with a focus on Artificial Intelligence and Machine Learning.",
    yearsOfExperience: 15,
  },
  {
    id: 2,
    name: "Prof. Sarah Williams",
    department: "Business Administration",
    bio: "A seasoned academic with a passion for teaching Marketing and Management. Specializes in business strategies.",
    yearsOfExperience: 18,
  },
  {
    id: 3,
    name: "Dr. Michael Smith",
    department: "Commerce",
    bio: "An expert in Accounting and Financial Management with extensive industry experience in auditing and taxation.",
    yearsOfExperience: 20,
  },
  {
    id: 4,
    name: "Prof. Elizabeth Johnson",
    department: "Arts",
    bio: "Specializes in English Literature and Sociocultural Studies. Passionate about helping students develop critical thinking.",
    yearsOfExperience: 10,
  },
  {
    id: 5,
    name: "Dr. David Brown",
    department: "Engineering",
    bio: "A mechanical engineering expert with years of experience in research and development in automation and robotics.",
    yearsOfExperience: 22,
  },
  {
    id: 6,
    name: "Dr. Laura White",
    department: "Law",
    bio: "Specializes in Constitutional Law and Human Rights, with a focus on legal reforms and justice administration.",
    yearsOfExperience: 12,
  },
  {
    id: 7,
    name: "Prof. James Taylor",
    department: "Science",
    bio: "A biologist specializing in Environmental Science with over 15 years of research in sustainable ecosystems.",
    yearsOfExperience: 15,
  },
  {
    id: 8,
    name: "Dr. Maria Garcia",
    department: "Hotel Management",
    bio: "An expert in hospitality management, focusing on hotel operations, customer service, and event planning.",
    yearsOfExperience: 17,
  },
  {
    id: 9,
    name: "Dr. Ahmed Khan",
    department: "Health Sciences",
    bio: "A specialist in Ayurvedic medicine with a deep interest in traditional healing methods and holistic health practices.",
    yearsOfExperience: 14,
  }
];

export default function FacultyDetail() {
  const router = useRouter();
  const { facultyId } = router.query;

  const faculty = faculties.find((faculty) => faculty.id === Number(facultyId));

  if (!facultyId) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <CircularProgress />
      </Box>
    );
  }

  if (!faculty) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <Typography variant="h5" color="error">
          Faculty not found. Please check the ID or go back to the Faculty List.
        </Typography>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => router.push("/faculties")}
          sx={{ marginTop: 2 }}
        >
          Back to Faculty List
        </Button>
      </Box>
    );
  }

  return (
    <>
      <Box height="100vh">
        <Card sx={{ margin: 3 }}>
          <CardContent>
            <Typography variant="h4" gutterBottom>
              {faculty.name}
            </Typography>
            <Typography variant="h6" gutterBottom>
              <strong>Department: </strong> {faculty.department}
            </Typography>
            <Typography variant="body1" paragraph>
              <strong>Bio:</strong> {faculty.bio}
            </Typography>
            <Typography variant="body1" paragraph>
              <strong>Years of Experience: </strong> {faculty.yearsOfExperience}
            </Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={() => router.push("/faculties")}
            >
              Back to Faculty List
            </Button>
          </CardContent>
        </Card>
      </Box>
    </>
  );
}
