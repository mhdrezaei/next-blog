import styled from "@emotion/styled";
import React from "react";
import theme from "../layout/theme";

const CommentBody = styled("div")({
  backgroundColor: theme.palette.primary.light,
  padding: 15,
  margin: "5px",
  borderRadius: "5px",
  "& .heading": {
    fontSize: 22,
    color: theme.palette.secondary.main,
    textAlign: "left",
  },
  "& .name": {
    fontSize: 20,
    fontFamily: "cursive",
    color: theme.palette.secondary.main,
    textAlign: "right",
  },
});

function CommentItem(props) {
  const { name, message } = props;
  return (
    <CommentBody>
      <p className="heading">{message}</p>
      <br />
      <p className="name">{name}</p>
    </CommentBody>
  );
}

export default CommentItem;
