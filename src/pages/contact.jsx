import { Container, Box, Typography, Paper } from "@mui/material";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import HeaderTypography from "../components/HeaderTypography";

export default function Contact() {
  return (
    <div>
      <Navbar />
      <Container maxWidth="md" sx={{ paddingY: 4 }}>
        <Paper sx={{ padding: 4, boxShadow: 3 }}>
          <Box mb={3}>
            <HeaderTypography>Contact Us</HeaderTypography>
            <Typography variant="body1" align="center">
              We would love to hear from you! Please fill out the form below to
              get in touch.
            </Typography>
          </Box>
          <ContactForm />
        </Paper>
      </Container>
      <Footer />
    </div>
  );
}
