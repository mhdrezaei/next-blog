import React, { useEffect, useState } from "react";
import { Container, styled } from "@mui/system";
import theme from "../layout/theme";

import CommentItem from "./CommentItem";
const Wrapper = styled("div")({
  position: "relative",
  backgroundColor: theme.palette.secondary.main,
  borderRadius: 10,
  padding: 10,
  marginTop: 50,
  marginBottom: 50,
  overflow: "hidden",
  boxShadow: "0 0 8px #666",
  "& .heading": {
    textAlign: "center",
    color: theme.palette.primary.main,
    fonyFamily: "cursive",
  },
});
function ShowComments(props) {
  const { comments } = props;
  console.log(comments.feedbacks.length);
  if (comments.feedbacks.length) {
    return (
      <Wrapper>
        <h1 className="heading">Comments!</h1>
        <hr />
        {comments &&
          comments.feedbacks.map((feedback) => {
            return (
              <CommentItem
                key={feedback.id}
                name={feedback.name}
                message={feedback.message}
              />
            );
          })}
      </Wrapper>
    );
  } else {
    return (
      <Wrapper>
        <h1 className="heading">no comments exist...</h1>
      </Wrapper>
    );
  }
}

export default ShowComments;
