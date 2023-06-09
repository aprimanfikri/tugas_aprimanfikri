import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Cover() {
  return (
    <>
      <Box
        sx={{
          marginLeft: "4rem",
          marginTop: "2rem",
          marginBottom: "6rem",
          "@media (max-width: 600px)": {
            marginLeft: "1rem",
            marginTop: "1rem",
            marginBottom: "3rem",
          },
        }}>
        <Typography variant="h4" color="white">
          Hello,
        </Typography>
        <Typography variant="h4" color="white">
          My Name Is
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <Box
          sx={{
            width: 1200,
            height: 300,
            borderRadius: 6,
            backgroundColor: "#3772FF",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            "@media (max-width: 600px)": {
              width: "90%",
              height: 200,
            },
          }}>
          <Typography
            variant="h1"
            color="white"
            align="center"
            sx={{
              "@media (max-width: 600px)": {
                fontSize: "2.5rem",
              },
            }}>
            APRIMAN FIKRI HAIKAL
          </Typography>
        </Box>
      </Box>
    </>
  );
}
