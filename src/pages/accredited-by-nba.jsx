import { Box } from "@mui/material";
import React from "react";
import CustomHeading from "../components/CustomHeading";
import Image from "next/image";

export default function AccreditedByNba() {
  return (
    <Box>
      <CustomHeading sx={{ justifyContent: "start" }}>
        Accredited by NBA
      </CustomHeading>
      <Box sx={{ px: { xs: 5, md: 10, lg: 15 }, py: 5 }}>
        <Box
          sx={{
            position: "relative",
            width: { xs: "100%", md: "80%" },
            height: {xs: 350, md:500},
            mx: "auto",
          }}
        >
          <Image src={"/images/accredited.jpg"} fill alt="accredited" />
        </Box>
        <Box
          sx={{
            position: "relative",
            width: { xs: "100%", md: "80%" },
            height: {xs: 350, md:500},
            mx: "auto",
          }}
        >
          <Image src={"/images/accredited-2.jpg"} fill alt="accredited-2"/>
        </Box>
      </Box>
    </Box>
  );
}
