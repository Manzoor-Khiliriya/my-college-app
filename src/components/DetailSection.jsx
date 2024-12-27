import { Box } from "@mui/material";
import Section from "./Section";

export default function DetailSection() {
  return (
    <Box>
      <Section title="Our Mission">
        Our mission is to provide a world-class education that prepares students
        for a successful future. We foster critical thinking, creativity, and a
        love for lifelong learning.
      </Section>

      <Section title="Our Vision">
        We envision a future where our students excel academically, socially,
        and emotionally. Our school is a place of innovation and inspiration,
        where students are encouraged to be their best selves.
      </Section>

      <Section title="Our Faculty">
        Our dedicated faculty members are passionate about education and are
        committed to creating a positive and inclusive learning environment.
        They bring expertise, experience, and a deep commitment to each students
        success.
      </Section>

      <Section title="Our Achievements">
        Over the years, we have won numerous academic awards, sports
        championships, and recognition for excellence in extracurricular
        activities. Our students consistently outperform on standardized tests,
        and many have gone on to attend prestigious universities.
      </Section>

      <Section title="Our Facilities">
        We offer state-of-the-art facilities including science labs, art
        studios, sports complexes, and a well-equipped library. Our campus is
        designed to provide a safe and inspiring space for students to learn and
        grow.
      </Section>
    </Box>
  );
}
