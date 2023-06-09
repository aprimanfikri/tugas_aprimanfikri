import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

import icaruswalks from "../assets/icaruswalks.png";
import dot from "../assets/dot.png";

import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <Box sx={{ padding: "4rem", marginTop: "2rem", marginBottom: "2rem" }}>
      <Typography variant="h4" color="white" gutterBottom>
        Projects
      </Typography>
      <Link to="/gmail-dot-trick" style={{ textDecoration: "none" }}>
        <Grid
          container
          spacing={4}
          alignItems="center"
          sx={{ marginBottom: "4rem" }}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h3" color="white" gutterBottom>
              Gmail Dot Trick
            </Typography>
            <Typography variant="h5" color="white" paragraph>
              Gmail dot trick is a technique that can be used with Gmail email
              addresses. It exploits the fact that Gmail doesn't consider dots
              (.) within the username part of an email address.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} sx={{ textAlign: "center" }}>
            <img
              src={dot}
              alt="Profile Picture"
              style={{
                width: "100%",
                maxWidth: "400px",
                margin: "auto",
              }}
            />
          </Grid>
        </Grid>
      </Link>
      {/* <Grid
        container
        spacing={4}
        alignItems="center"
        sx={{ marginBottom: "4rem" }}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h3" color="white" gutterBottom>
            Gmail Dot Trick
          </Typography>
          <Typography variant="h5" color="white" paragraph>
            Gmail dot trick is a technique that can be used with Gmail email
            addresses. It exploits the fact that Gmail doesn't consider dots (.)
            within the username part of an email address.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} sx={{ textAlign: "center" }}>
          <img
            src={icaruswalks}
            alt="Profile Picture"
            style={{
              width: "100%",
              maxWidth: "400px",
              margin: "auto",
            }}
          />
        </Grid>
      </Grid>
      <Grid
        container
        spacing={4}
        alignItems="center"
        sx={{ marginBottom: "4rem" }}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h3" color="white" gutterBottom>
            Gmail Dot Trick
          </Typography>
          <Typography variant="h5" color="white" paragraph>
            Gmail dot trick is a technique that can be used with Gmail email
            addresses. It exploits the fact that Gmail doesn't consider dots (.)
            within the username part of an email address.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} sx={{ textAlign: "center" }}>
          <img
            src={icaruswalks}
            alt="Profile Picture"
            style={{
              width: "100%",
              maxWidth: "400px",
              margin: "auto",
            }}
          />
        </Grid>
      </Grid> */}
    </Box>
  );
}
