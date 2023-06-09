import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import icaruswalks from "../assets/icaruswalks.png";

export default function Profile() {
  return (
    <>
      <Box sx={{ padding: "4rem", marginTop: "2rem", marginBottom: "2rem" }}>
        <Typography variant="h4" color="white">
          Profile
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginLeft: "6rem",
          marginBottom: "2rem",
          "@media (max-width: 600px)": {
            marginLeft: "1rem",
          },
        }}>
        <div>
          <Typography variant="h3" color="white">
            Apriman Fikri Haikal
          </Typography>
          <Typography
            variant="h5"
            color="white"
            sx={{ marginTop: "2rem", marginBottom: "2rem" }}>
            Fullstack Developer
          </Typography>
          <Typography variant="body1" color="white">
            Passionate Web Developer | Undergraduate Informatics Student at
            Amikom Purwokerto University
          </Typography>
        </div>
        <img
          src={icaruswalks}
          alt="Profile Picture"
          style={{ width: "400px", margin: "auto" }}
          sx={{
            "@media (max-width: 600px)": {
              width: "100%",
              maxWidth: "300px",
              marginTop: "2rem",
            },
          }}
        />
      </Box>
      <Box>
        <Typography
          variant="h5"
          color="white"
          align="center"
          sx={{ marginTop: "4rem", marginBottom: "2rem" }}>
          “jika wanita di dunia milik si tampan, maka bidadari surga milik
          apriman”
        </Typography>
      </Box>
    </>
  );
}
