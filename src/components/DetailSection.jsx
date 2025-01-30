import Grid from "@mui/material/Grid2";
import Section from "./Section";
import { Box } from "@mui/material";

export default function DetailSection() {
  const details = [
    {
      title: "Our Mission",
      text: "Our mission is to provide a world-class education that prepares students for a successful future. We foster critical thinking, creativity, and a love for lifelong learning.",
    },
    {
      title: "Our Vision",
      text: "We envision a future where our students excel academically, socially, and emotionally. Our school is a place of innovation and inspiration, where students are encouraged to be their best selves.",
    },
    {
      title: "Our Faculty",
      text: "Our dedicated faculty members are passionate about education and are committed to creating a positive and inclusive learning environment. They bring expertise, experience, and a deep commitment to each student's success.",
    },
    {
      title: "Our Achievements",
      text: "Over the years, we have won numerous academic awards, sports championships, and recognition for excellence in extracurricular activities. Our students consistently outperform on standardized tests, and many have gone on to attend prestigious universities.",
    },
    {
      title: "Our Facilities",
      text: "We offer state-of-the-art facilities including science labs, art studios, sports complexes, and a well-equipped library. Our campus is designed to provide a safe and inspiring space for students to learn and grow.",
    },
    {
      title: "Our Programs",
      text: "We offer a diverse range of academic and extracurricular programs designed to cater to students' unique talents and interests. From STEM initiatives to performing arts, we ensure a well-rounded education.",
    },
  ];
  return (
    <Grid container spacing={2}>
      {details.map((section, index) => (
        <Grid
          size={{ xs: 12, sm: 6, lg: 4 }}
          key={index}
          sx={{ display: "flex" }}
        >
          <Box sx={{ height: "100%", display: "flex" }}>
            <Section title={section.title}>{section.text}</Section>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}
