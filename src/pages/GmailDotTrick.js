import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";

function generateDotVariations(email) {
  const username = email.split("@")[0];
  const domain = "@gmail.com";

  const variations = [];

  const numOfCombinations = 2 ** (username.length - 1);

  for (let i = 0; i < numOfCombinations; i++) {
    let dotemail = "";
    for (let j = 0; j < username.length; j++) {
      dotemail += username[j];
      if ((i >> j) & 1) {
        dotemail += ".";
      }
    }
    dotemail += domain;
    variations.push(dotemail);
  }

  return variations;
}

export default function GmailDotTrick() {
  const [email, setEmail] = React.useState("");
  const [generatedEmails, setGeneratedEmails] = React.useState([]);
  const [alertOpen, setAlertOpen] = React.useState(false);
  const [alertMessage, setAlertMessage] = React.useState("");

  const handleGenerate = () => {
    if (/^[\w.]+@gmail\.com$/.test(email)) {
      const variations = generateDotVariations(email);
      setGeneratedEmails(variations);
    } else {
      setAlertMessage("Please enter a valid Email Address");
      setAlertOpen(true);
    }
  };

  const handleSave = () => {
    if (generatedEmails.length === 0) {
      setAlertMessage("No emails to save.");
      setAlertOpen(true);
      return;
    }

    const username = email.split("@")[0];
    const fileName = `${username}@gmail.com.txt`;

    const element = document.createElement("a");
    const file = new Blob([generatedEmails.join("\n")], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = fileName;
    document.body.appendChild(element);
    element.click();
  };

  const handleCloseAlert = () => {
    setAlertOpen(false);
  };

  return (
    <>
      <Box
        component="form"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          overflow: "hidden",
        }}
        noValidate
        autoComplete="off">
        <Grid container spacing={2} alignItems="center" justifyContent="center">
          <Grid item xs={12}>
            <Typography
              variant="h4"
              color="white"
              sx={{ textAlign: "center", marginBottom: "1rem" }}>
              Gmail Dot Trick
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TextField
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="username"
              label="example@gmail.com"
              variant="outlined"
              fullWidth
              sx={{
                backgroundColor: "#23262F",
                "& .MuiOutlinedInput-input": {
                  color: "white",
                },
                "& .MuiOutlinedInput-root": {
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "transparent",
                  },
                },
                "& .MuiInputLabel-root": {
                  color: "white",
                },
              }}
              InputLabelProps={{
                style: {
                  color: "white",
                },
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Button
              id="generate"
              variant="contained"
              fullWidth
              onClick={handleGenerate}>
              Generate
            </Button>
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography>Email</Typography>
            <Typography variant="subtitle1">
              Total Emails Generated: {generatedEmails.length}
            </Typography>
            <TextField
              id="emails"
              fullWidth
              multiline
              rows={12}
              value={generatedEmails.join("\n")}
              sx={{
                backgroundColor: "#23262F",
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
            <Button
              id="save"
              variant="contained"
              sx={{ marginTop: "1rem" }}
              onClick={handleSave}>
              Save
            </Button>
          </Grid>
        </Grid>
      </Box>
      <Dialog open={alertOpen} onClose={handleCloseAlert}>
        <DialogTitle>Error</DialogTitle>
        <DialogContent>{alertMessage}</DialogContent>
        <DialogActions>
          <Button onClick={handleCloseAlert}>OK</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
