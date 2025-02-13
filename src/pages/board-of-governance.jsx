import {
  Box,
  Typography,
  Link,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import React from "react";
import ContactInfoCard from "../components/ContactInfoCard";
import CustomHeading from "../components/CustomHeading";

const members = [
  "Sri Ajayan C, Additional Secretary Higher Education Dept",
  "Dr M Abdul Rahiman, Director, LBS Centre for Science & Technology",
  "Dr Ramesh Unnikrishnan, Advisor, AICTE, New Delhi",
  "Dr Shreelekshmi R, Director, SPFU, DTE Thiruvananthapuram",
  "Dr Sreekanth Madhavan, CEO, Kabhani Tech, Shornur",
  "Sri. Jayakumar S, Chief Technical Advisor, ULCCS Ltd, Kozhikode",
  "Sri. C A Ahammed, Managing Director Assmas Constructions Pvt Ltd, Kasargod",
  "Dr Praveen Kumar K, Professor, LBS College of Engg. Kasargod",
  "Dr Rajashree Raghavan, Professor LBS College of Engg. Kasaragod",
];

const minutesLinks = [
  {
    text: "Minutes of the meeting (online) of BoG held on 14-12-23",
    link: "#",
  },
  { text: "Minutes of the BoG meeting held on 18-03-24", link: "#" },
];

const governingBody = [
  { title: "Chairman", name: "Hon’ble Chief Minister" },
  { title: "Vice Chairperson", name: "Hon’ble Minister for Higher Education" },
  {
    title: "Member Secretary",
    name: "Director, L.B.S. Centre for Science and Technology",
  },
  {
    title: "Other Members",
    names: [
      "Principal Secretaries to Govt. Higher Education, Finance, and Industries departments",
      "Director of Technical Education, Govt. of Kerala",
      "Head of Office of various Govt. bodies and Industrial Organizations",
    ],
  },
];

const executiveCommittee = [
  {
    title: "Chairperson",
    name: "Principal Secretary to Govt., Higher Education",
  },
  { title: "Vice Chairperson", name: "Director of Technical Education" },
  {
    title: "Member Secretary",
    name: "Director, L.B.S. Centre for Science and Technology",
  },
  {
    title: "Other Members",
    names: [
      "Principal Secretary to Govt., Finance Dept. or his Nominee",
      "Principal, College of Engineering, Thiruvananthapuram.",
      "Chief Executive, Technopark, Thiruvananthapuram.",
      "Managing Director, TTPL, Thiruvananthapuram.",
    ],
  },
];

export default function BoardOfGovernors() {
  return (
    <Box>
      <CustomHeading>Board of Governors</CustomHeading>

      <Grid container spacing={5} px={5} pt={4} pb={{ xs: 4, md: 15 }}>
        <Grid size={{ xs: 12, md: 8 }}>
          <Typography variant="h5" fontWeight={800} gutterBottom>
            Board of Governors
          </Typography>

          <Typography variant="body1" fontWeight={700} gutterBottom>
            Chairman
          </Typography>
          <Typography variant="body1" paragraph>
            Prof M Thamban Nair, Fr Professor, IIT Madras
          </Typography>

          <Typography variant="body1" fontWeight={700} gutterBottom>
            Members
          </Typography>
          <ul>
            {members.map((member, index) => (
              <li key={index}>
                <Typography variant="body1" paragraph>
                  {member}
                </Typography>
              </li>
            ))}
          </ul>

          <Typography variant="body1" mb={3}>
            <strong><i>Member Secretary:</i></strong>  Dr Mohammad Sekoor T, Principal, LBS College of Engg. Kasargod
          </Typography>
          

          <Box>
            {minutesLinks.map((link, index) => (
              <Link
              key={index}
                href={link.link}
                underline="none"
                display={'block'}
                color="#5e5e5e"
                fontWeight={700}
                mb={2}
                sx={{ "&:hover": { color: "#3db166" } }}
              >
                {link.text}
              </Link>
            ))}
          </Box>

          <Typography variant="h5" fontWeight={800} gutterBottom>
            Governing Body (LBS Centre for Science & Technology)
          </Typography>
          <ul>
            {governingBody.map((member, index) =>
              member.names ? (
                <li key={index}>
                  <Typography variant="body1" paragraph>
                    <strong>{member.title}:</strong> {member.name}
                  </Typography>
                  <ul>
                    {member.names.map((name, idx) => (
                      <li key={idx}>
                        <Typography variant="body1" paragraph>
                          {name}
                        </Typography>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li key={index}>
                  <Typography variant="body1" paragraph>
                    <strong>{member.title}:</strong> {member.name}
                  </Typography>
                </li>
              )
            )}
          </ul>

          <Typography variant="h5" fontWeight={800} gutterBottom>
            Executive Committee Members (LBS Centre for Science & Technology)
          </Typography>
          <ul>
            {executiveCommittee.map((member, index) =>
              member.names ? (
                <li key={index}>
                  <Typography variant="body1" paragraph>
                    <strong>{member.title}:</strong> {member.name}
                  </Typography>
                  <ul>
                    {member.names.map((name, idx) => (
                      <li key={idx}>
                        <Typography variant="body1" paragraph>
                          {name}
                        </Typography>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li key={index}>
                  <Typography variant="body1" paragraph>
                    <strong>{member.title}:</strong> {member.name}
                  </Typography>
                </li>
              )
            )}
          </ul>
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <ContactInfoCard />
        </Grid>
      </Grid>
    </Box>
  );
}
