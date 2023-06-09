import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import HomeIcon from "@mui/icons-material/Home";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import Grid from "@mui/material/Grid";

import icaruswalks from "../assets/icaruswalks.png";

export default function Contacts() {
  return (
    <>
      <Box sx={{ padding: "4rem", marginTop: "2rem", marginBottom: "2rem" }}>
        <Typography variant="h4" color="white">
          Contacts
        </Typography>
      </Box>
      <Grid container spacing={2} sx={{ padding: "4rem" }}>
        <Grid item xs={12} sm={4}>
          <Box
            color="white"
            display="flex"
            flexDirection="column"
            alignItems="center"
            sx={{
              marginBottom: { xs: "2rem", sm: 0 },
              borderRight: { xs: 0, sm: "1px solid white" },
              borderBottom: { xs: "1px solid white", sm: 0 },
              paddingRight: { xs: 0, sm: "2rem" },
              paddingBottom: { xs: "2rem", sm: 0 },
            }}>
            <HomeIcon />
            <Typography marginBottom="2rem">Address</Typography>
            <Typography>Wangandalem</Typography>
            <Typography>Brebes, Jawa Tengah</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box
            color="white"
            display="flex"
            flexDirection="column"
            alignItems="center"
            sx={{
              marginBottom: { xs: "2rem", sm: 0 },
              borderRight: { xs: 0, sm: "1px solid white" },
              borderBottom: { xs: "1px solid white", sm: 0 },
              paddingRight: { xs: 0, sm: "2rem" },
              paddingBottom: { xs: "2rem", sm: 0 },
            }}>
            <LocalPhoneIcon />
            <Typography marginBottom="2rem">Contact Phone</Typography>
            <Typography>+62 878 1228 2227</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box
            color="white"
            display="flex"
            flexDirection="column"
            alignItems="center"
            sx={{ paddingBottom: { xs: "2rem", sm: 0 } }}>
            <EmailIcon />
            <Typography marginBottom="2rem">Email</Typography>
            <Typography>aprmnfkr@gmail.com</Typography>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
