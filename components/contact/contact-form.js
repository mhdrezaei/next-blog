import { Container, styled } from "@mui/system";
import React, { useEffect, useState } from "react";
import theme from "../layout/theme";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import CircularProgress from "@mui/material/CircularProgress";
import Notification from "../ui/notification";
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
  "& .btn-div": {
    textAlign: "center",
    padding: 20,
  },
});

async function sendContactData(contactDetal) {
  const response = await fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(contactDetal),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "something went wrong");
  }
  return data.message;
}

function ContactForm() {
  const [hasError, setHasError] = useState({
    errorName: false,
    errorEmail: false,
    errorMessage: false,
    errorRequest: false,
  });
  const [alert, setAlert] = useState({
    alertName: "",
    alertEmail: "",
    alertMessage: "",
    alertRequest: "",
  });
  const [status, setStatus] = useState("");
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredMessage, setEnteredMessage] = useState(
    "Type your message here ..."
  );

  useEffect(() => {
    if (status === "success" || status === "error") {
      const timer = setTimeout(() => {
        setStatus("");
        setAlert({
          alertName: "",
          alertEmail: "",
          alertMessage: "",
          alertRequest: "",
        });
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [status]);

  async function submitHandler(event) {
    event.preventDefault();
    if (enteredName === "" || enteredName.trim() === "") {
      setHasError({ errorName: true });
      setAlert({ alertName: "Your Name is necessary!" });
      return false;
    }
    if (
      !enteredEmail.includes("@") ||
      !enteredEmail.includes(".") ||
      enteredEmail === "" ||
      enteredEmail.trim() === ""
    ) {
      setHasError({ errorEmail: true });
      setAlert({ alertEmail: "Your Email is necessary und musst be valid!" });
      return false;
    }
    if (enteredMessage.length < 15 || !enteredMessage.trim() === "") {
      setHasError({ errorMessage: true });
      setAlert({ alertMessage: "Your Message is to short!" });
      return false;
    }
    setStatus("pending");
    try {
      setTimeout(() => {
        const sendMessage = sendContactData({
          name: enteredName,
          email: enteredEmail,
          message: enteredMessage,
        });
        console.log(sendMessage.message);
        setStatus("success");
        setAlert({ alertRequest: sendMessage.message });
        setEnteredName("");
        setEnteredEmail("");
        setEnteredMessage("Type your message here ...");
      }, 3000);
    } catch (error) {
      setStatus("error");
      setHasError({ errorMessage: true });
      setAlert({ alertRequest: error.message });
    }
  }
  function nameOnChange(event) {
    setEnteredName(event.target.value);
    if (enteredName.length < 2) {
      setHasError({ errorName: true });
      setAlert({ alertName: "Your Name is short!" });
    } else {
      setHasError({ errorName: false });
      setAlert({ alertName: "" });
    }
  }
  function messageOnChange(event) {
    setEnteredMessage(event.target.value);
    if (enteredMessage.length < 15 || !enteredMessage.trim() === "") {
      setHasError({ errorMessage: true });
      setAlert({ alertMessage: "Your Message is to short!" });
    } else {
      setHasError({ errorMessage: false });
      setAlert({ alertMessage: "" });
    }
  }
  function emailOnChange(event) {
    setEnteredEmail(event.target.value);
    if (!enteredEmail.includes("@") || !enteredEmail.includes(".")) {
      setHasError({ errorEmail: true });
      setAlert({ alertEmail: "Your Email is invalid!" });
    } else {
      setHasError({ errorEmail: false });
      setAlert({ alertEmail: "" });
    }
  }

  let notification;

  if (status === "pending") {
    notification = {
      status: "pending",
      title: "Sending message...",
      message: "Your message is on its way!",
    };
  }

  if (status === "success") {
    notification = {
      status: "success",
      title: "Success!",
      message: "Message sent successfully!",
    };
  }

  if (status === "error") {
    notification = {
      status: "error",
      title: "Error!",
      message: requestError,
    };
  }

  return (
    <Container>
      <Wrapper>
        <h1 className="heading">Contact form</h1>
        <form onSubmit={submitHandler}>
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
              value={enteredName}
              error={hasError.errorName ? true : false}
              helperText={alert.alertName ? alert.alertName : ""}
              onChange={nameOnChange}
            />
            <TextField
              id="email"
              label="Email Address"
              type="email"
              name="email"
              value={enteredEmail}
              error={hasError.errorEmail ? true : false}
              helperText={alert.alertEmail ? alert.alertEmail : ""}
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
              defaultValue={enteredMessage}
              name="message"
              error={hasError.errorMessage ? true : false}
              helperText={alert.alertMessage ? alert.alertMessage : ""}
              onChange={messageOnChange}
            />
          </Box>
          <div className="btn-div">
            <Button
              type="submit"
              variant="contained"
              endIcon={
                status === "pending" ? (
                  <CircularProgress size={20} color="inherit" />
                ) : (
                  <SendIcon />
                )
              }
            >
              Send
            </Button>
          </div>
          {notification && (
            <Notification
              status={notification.status}
              title={notification.title}
              message={notification.message}
            />
          )}
        </form>
      </Wrapper>
    </Container>
  );
}

export default ContactForm;
