import * as React from "react";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

export default function GetInTouch() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "58vh",
      }}>
      <Typography color="white" sx={{ padding: 2 }}>
        Get In Touch
      </Typography>
      <Box sx={{ maxWidth: "50ch", width: "100%", paddingX: 2 }}>
        <Typography sx={{ color: "white" }}>Email Address</Typography>
        <TextField
          id="outlined-basic"
          variant="outlined"
          sx={{
            backgroundColor: "#23262F",
            borderRadius: 4,
            width: "100%",
            "& .MuiOutlinedInput-input": {
              color: "white",
            },
            "& .MuiOutlinedInput-root": {
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "transparent",
              },
            },
          }}
        />
      </Box>
      <Box
        sx={{
          marginTop: "2rem",
          maxWidth: "50ch",
          width: "100%",
          paddingX: 2,
        }}>
        <Typography sx={{ color: "white" }}>Your Message</Typography>
        <TextField
          variant="outlined"
          multiline
          rows={6}
          sx={{
            backgroundColor: "#23262F",
            borderRadius: 4,
            width: "100%",
            height: "20ch",
            "& .MuiOutlinedInput-input": {
              color: "white",
            },
            "& .MuiOutlinedInput-root": {
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "transparent",
              },
            },
          }}
        />
      </Box>
      <Button variant="contained" sx={{ marginTop: "2rem", borderRadius: 4 }}>
        Send Now
      </Button>
    </div>
  );
}
