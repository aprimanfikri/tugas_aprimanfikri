import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";

import mp from "../assets/mp.avif";
import fs from "../assets/fs.avif";
import uiux from "../assets/uiux.avif";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 5,
  width: 200,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
  },
}));

export default function Skills() {
  return (
    <Box sx={{ padding: "4rem", marginTop: "2rem", marginBottom: "2rem" }}>
      <Typography variant="h4" color="white">
        Skills
      </Typography>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "2rem",
          marginTop: "4rem",
        }}>
        <Card
          sx={{
            borderRadius: "2rem",
            backgroundColor: "#353945",
          }}>
          <CardContent>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}>
              <img
                src={mp}
                alt="Profile Picture"
                style={{
                  width: "180px",
                  borderRadius: "2rem",
                  marginTop: "2rem",
                }}
              />
            </div>
            <Typography
              variant="h5"
              color="white"
              align="center"
              sx={{ marginTop: "2rem" }}>
              Management Project
            </Typography>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "2rem",
              }}>
              <BorderLinearProgress variant="determinate" value={90} />
            </div>
          </CardContent>
        </Card>
        <Card
          sx={{
            borderRadius: "2rem",
            backgroundColor: "#353945",
          }}>
          <CardContent>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}>
              <img
                src={fs}
                alt="Profile Picture"
                style={{
                  width: "180px",
                  borderRadius: "2rem",
                  marginTop: "2rem",
                }}
              />
            </div>
            <Typography
              variant="h5"
              color="white"
              align="center"
              sx={{ marginTop: "2rem" }}>
              Full-Stack Developer
            </Typography>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "2rem",
              }}>
              <BorderLinearProgress variant="determinate" value={90} />
            </div>
          </CardContent>
        </Card>
        <Card
          sx={{
            borderRadius: "2rem",
            backgroundColor: "#353945",
          }}>
          <CardContent>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}>
              <img
                src={uiux}
                alt="Profile Picture"
                style={{
                  width: "180px",
                  borderRadius: "2rem",
                  marginTop: "2rem",
                }}
              />
            </div>
            <Typography
              variant="h5"
              color="white"
              align="center"
              sx={{ marginTop: "2rem" }}>
              UI/UX
            </Typography>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "2rem",
              }}>
              <BorderLinearProgress variant="determinate" value={90} />
            </div>
          </CardContent>
        </Card>
      </div>
    </Box>
  );
}
