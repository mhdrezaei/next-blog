import { Container, styled } from "@mui/system";
import React, { useEffect, useState } from "react";
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

  const [hasError , setHasError] = useState({errorName : false ,errorEmail : false ,errorMessage : false });
  const [alert , setAlert] = useState({alertName : '' , alertEmail : '' , alertMessage : ''});
  const [status , setStatus] = useState('');
  const [enteredName , setEnteredName] = useState('');
  const [enteredEmail , setEnteredEmail] = useState('');
  const [enteredMessage , setEnteredMessage] = useState('');
  
  async function sendContactData(contactDetail){

    useEffect(() => {
     
  
    }, [hasError])
  }
  
  const submitHandler = (event) => {
    event.preventDefault();
    if (enteredName === '' || enteredName.trim() === '' || enteredName.length < 2){
      setHasError({errorName : true})
      setAlert({alertName : 'Enter Your Name!'})
    }else{
      setHasError({errorName : false})
      setAlert({alertName : ''})
    }

    

  }
  function nameOnChange(event) {
    setEnteredName(event.target.value);
    if(enteredName.length < 2){
      setHasError({errorName : true})
    setAlert({alertName : 'Your Name is short!'})
    }else{
      setHasError({errorName : false})
    setAlert({alertName : ''})
    }
  }
  function emailOnChange(event) {
    setEnteredEmail(event.target.value);
    if(!enteredEmail.includes('@') || !enteredEmail.includes('.') ){
      setHasError({errorEmail : true})
    setAlert({alertEmail : 'Your Email is invalid!'})
    }else{
      setHasError({errorEmail : false})
    setAlert({alertEmail : ''})
    }
  }
  return (
    <Container>
      <Wrapper>
        <h1 className="heading">Contact form</h1>
        <form onSubmit={submitHandler} >
          <Box
            component="div"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "48%" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="name"
              label="Your Name"
              type="text"
              name="name"
              
              error={hasError.errorName ? 'error' : ''}
              helperText={alert.alertName ? alert.alertName : ''}
              onChange={nameOnChange}
            />
            <TextField
              id="email"
              label="Email Address"
              type="email"
              name="email"
              error={hasError.errorEmail ? 'error' : ''}
              helperText={alert.alertEmail ? alert.alertEmail : ''}
              onChange={emailOnChange}
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
              id="message"
              label="Message"
              multiline
              rows={4}
              defaultValue="Type your message here ..."
              name="message"
              // onChange={setEnteredMessage((e) => e.target.value)}
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
