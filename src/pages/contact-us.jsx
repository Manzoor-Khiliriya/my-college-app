import ContactForm from "@/components/ContactForm";
import { Container } from "@mui/material";

export default function Contact() {
  return (
    <>
      <Container maxWidth="md" sx={{ paddingY: 4 }}>
        <ContactForm />
      </Container>
    </>
  );
}
