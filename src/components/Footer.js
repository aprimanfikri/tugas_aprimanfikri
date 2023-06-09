import * as React from "react";
import Box from "@mui/material/Box";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import Typography from "@mui/material/Typography";

export default function Footer() {
  return (
    <>
      <Box
        sx={{
          marginTop: "4rem",
          marginBottom: "4rem",
          display: "flex",
          justifyContent: "center",
        }}>
        <a
          href="https://www.facebook.com/apriman.fikri"
          target="_blank"
          rel="noopener noreferrer">
          <FacebookIcon sx={{ marginRight: "2rem", color: "white" }} />
        </a>
        <a
          href="https://www.twitter.com/xarfhkl"
          target="_blank"
          rel="noopener noreferrer">
          <TwitterIcon sx={{ marginRight: "2rem", color: "white" }} />
        </a>
        <a
          href="https://www.instagram.com/xfrhk"
          target="_blank"
          rel="noopener noreferrer">
          <InstagramIcon sx={{ color: "white" }} />
        </a>
      </Box>
      <Box
        sx={{
          marginBottom: 4,
          display: "flex",
          justifyContent: "center",
        }}>
        <Typography sx={{ color: "#777E90" }}>
          &copy; {new Date().getFullYear()} APRIMAN FIKRI. All rights reserved
        </Typography>
      </Box>
    </>
  );
}
