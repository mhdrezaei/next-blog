import { Container, styled } from "@mui/system";
import React from "react";
import theme from "../layout/theme";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
const Wrapper = styled("div")({
  position: "relative",
  backgroundColor: theme.palette.secondary.main,
  borderRadius: 10,
  padding: 10,
  marginTop: 50,
  overflow: "hidden",
  boxShadow: "0 0 8px #666",
  "& .heading": {
    textAlign: "center",
    color: theme.palette.primary.main,
    fonyFamily: "cursive",
  },
  "& .btn-div":{
    textAlign : "center",
    padding : 20
  }
});
function ContactForm() {
  return (
    <Container>
      <Wrapper>
        <h1 className="heading">Contact form</h1>
        <form>
          <Box
            component="div"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "48%" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              required
              id="outlined-search"
              label="Your Name"
              type="text"
            />
            <TextField
              required
              id="outlined-search"
              label="Email Address"
              type="email"
            />
          </Box>
          <Box
            component="div"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "98%" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-multiline-static"
              label="Message"
              multiline
              required
              rows={4}
              defaultValue="Type your message here ..."
            />
          </Box>
          <div className="btn-div">
            <Button type="submit" variant="contained" endIcon={<SendIcon />}>
              Send
            </Button>
          </div>
        </form>
      </Wrapper>
    </Container>
  );
}

export default ContactForm;
