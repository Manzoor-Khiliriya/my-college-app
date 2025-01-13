import React from "react";
import { useRouter } from "next/router";
import { Card, CardContent, Typography, Box, Button } from "@mui/material";


const courses = [
  {
    "id": 1,
    "title": "BCom (Bachelor of Commerce)",
    "description": "The Bachelor of Commerce (BCom) is a three-year undergraduate degree program that provides students with a strong foundation in business and financial management. The course typically covers subjects such as accounting, economics, business law, finance, taxation, and auditing. It is designed to equip students with the skills needed to pursue careers in accounting, finance, business administration, and economics. Graduates can work in corporate sectors, banks, financial institutions, or as entrepreneurs, and it also serves as a stepping stone for professional courses like CA (Chartered Accountant) or MBA (Master of Business Administration)."
  },
  {
    "id": 2,
    "title": "BBA (Bachelor of Business Administration)",
    "description": "The Bachelor of Business Administration (BBA) is a comprehensive undergraduate degree program that focuses on developing leadership, management, and entrepreneurial skills. The course typically includes subjects like business management, marketing, human resources, organizational behavior, business law, and accounting. BBA is ideal for students interested in pursuing managerial roles or starting their own businesses. It provides practical knowledge and prepares students for roles in corporate management, sales, marketing, or human resources. Many students also pursue an MBA after completing their BBA to further enhance their managerial skills."
  },
  {
    "id": 3,
    "title": "BSc (Bachelor of Science)",
    "description": "The Bachelor of Science (BSc) is an undergraduate degree program that allows students to specialize in subjects related to the natural and physical sciences, including biology, chemistry, physics, mathematics, and computer science. The program focuses on developing scientific knowledge, analytical thinking, and problem-solving skills. Students pursuing BSc can choose from various specializations like Physics, Chemistry, Mathematics, Biotechnology, Environmental Science, or Computer Science, leading to diverse career opportunities in research, healthcare, pharmaceuticals, education, and technology. The degree also serves as a foundation for advanced studies in science or engineering."
  },
  {
    "id": 4,
    "title": "BA (Bachelor of Arts)",
    "description": "The Bachelor of Arts (BA) is an undergraduate degree program that covers a wide range of liberal arts subjects, including English, History, Sociology, Political Science, Psychology, Economics, and Philosophy. The BA program emphasizes critical thinking, communication, research, and analytical skills. It is ideal for students who want to pursue careers in education, writing, public relations, social services, journalism, or politics. The flexibility of the program allows students to explore various fields and tailor their studies to their interests. Many students also use a BA as a stepping stone for advanced degrees in law, education, or public administration."
  },
  {
    "id": 5,
    "title": "BTech (Bachelor of Technology)",
    "description": "The Bachelor of Technology (BTech) is a four-year undergraduate degree program in engineering and technology that provides students with specialized knowledge in fields such as Computer Science, Mechanical Engineering, Electrical Engineering, Civil Engineering, and Electronics. The program emphasizes practical and theoretical knowledge, developing problem-solving, critical thinking, and technical skills. Graduates of BTech can pursue careers in engineering, research and development, IT, manufacturing, construction, and telecommunications. The program also provides a foundation for pursuing advanced degrees such as MTech or MBA."
  },
  {
    "id": 6,
    "title": "BCA (Bachelor of Computer Applications)",
    "description": "The Bachelor of Computer Applications (BCA) is an undergraduate degree that focuses on computer science, programming, and software development. The program provides students with a strong understanding of IT systems, computer programming languages, web development, database management, and networking. BCA is ideal for students looking to pursue careers in software development, IT consulting, and network administration. Graduates can work in the technology sector, including in companies that specialize in software development, digital marketing, and IT infrastructure management."
  },
  {
    "id": 7,
    "title": "LLB (Bachelor of Laws)",
    "description": "The Bachelor of Laws (LLB) is a professional undergraduate degree in law that provides students with an understanding of legal principles, governance, and ethics. The program covers subjects such as constitutional law, criminal law, civil law, corporate law, international law, and family law. It prepares students for a career in the legal profession, including roles such as lawyers, legal advisors, and judges. After completing an LLB, many graduates go on to work in law firms, government organizations, or as independent legal practitioners."
  },
  {
    "id": 8,
    "title": "BHM (Bachelor of Hotel Management)",
    "description": "The Bachelor of Hotel Management (BHM) is a degree program focused on the hospitality industry, providing students with knowledge and skills in hotel operations, food and beverage management, front office management, and tourism. The course prepares students for managerial positions in hotels, resorts, and other hospitality-related businesses. Topics covered include customer service, event planning, financial management, and marketing. Graduates can pursue careers in hotel management, event management, tourism, or hospitality consulting."
  },
  {
    "id": 9,
    "title": "BDS (Bachelor of Dental Surgery)",
    "description": "The Bachelor of Dental Surgery (BDS) is a professional degree program that trains students to become dental professionals. The program covers subjects such as oral anatomy, dental materials, oral pathology, and clinical dentistry. Students are trained to diagnose and treat dental conditions, perform surgeries, and provide preventative dental care. BDS graduates can work as dentists in private practices, hospitals, or government healthcare services. The degree also provides opportunities for specialization in areas such as orthodontics, periodontics, and pediatric dentistry."
  },
  {
    "id": 10,
    "title": "BAMS (Bachelor of Ayurvedic Medicine and Surgery)",
    "description": "The Bachelor of Ayurvedic Medicine and Surgery (BAMS) is an undergraduate program that combines traditional Ayurvedic medicine with modern medical practices. The course focuses on the principles of Ayurveda, herbal medicine, and holistic health, providing students with a deep understanding of alternative medicine. The program includes practical training in diagnosing and treating various health conditions using Ayurvedic methods. Graduates of BAMS can work as Ayurvedic doctors, consultants, or therapists, and many also pursue advanced studies or research in the field of alternative medicine."
  }
]


export default function CourseDetails() {
  const router = useRouter();
  const { courseId } = router.query;

  const course = courses.find((course) => course.id === Number(courseId));

  if (!course) return <Typography>Loading...</Typography>;

  return (
    <>
      <Box sx={{ margin: "auto", marginBlock: 3 }}>
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
