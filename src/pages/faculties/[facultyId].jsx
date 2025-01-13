import { useRouter } from "next/router";
import { Card, CardContent, Typography, Box, Button } from "@mui/material";


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

export default function FacultyDetail() {
  const router = useRouter();
  const { facultyId } = router.query;

  const faculty = faculties.find((faculty) => faculty.id === Number(facultyId));

  if (!faculty) return <Typography>Loading...</Typography>;

  return (
    <>
      <Box>
        <Card sx={{ maxWidth: 600, margin: "auto", marginBlock: 3 }}>
          <CardContent>
            <Typography variant="h4" gutterBottom>
              {faculty.name}
            </Typography>
            <Typography variant="h6" color="text.secondary" gutterBottom>
              Department: {faculty.department}
            </Typography>
            <Typography variant="body1" paragraph>
              <strong>Bio:</strong> {faculty.bio}
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
