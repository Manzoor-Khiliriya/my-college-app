import { Container, Paper, Divider } from '@mui/material';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AdmissionsIntro from '@/components/AdmissionsIntro';
import AdmissionProcess from '@/components/AdmissionProcess';
import FeeStructure from '@/components/FeeStructure';
import ExtracurricularActivities from '@/components/ExtracurricularActivities';
import FAQs from '@/components/FAQs';

export default function Admissions() {
  return (
    <div>
      <Navbar />
      <Container maxWidth="md" sx={{ paddingY: 4 }}>
        <Paper sx={{ padding: 4, boxShadow: 3 }}>
          <AdmissionsIntro />
          <Divider sx={{ my: 3 }} />
          <AdmissionProcess />
          <Divider sx={{ my: 3 }} />
          <FeeStructure />
          <Divider sx={{ my: 3 }} />
          <ExtracurricularActivities />
          <Divider sx={{ my: 3 }} />
          <FAQs />
        </Paper>
      </Container>
      <Footer />
    </div>
  );
}
