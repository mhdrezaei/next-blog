import { Container } from "@mui/system";
import React from "react";
import CommentForm from "./CommentForm";
import ShowComments from "./showComments";

function Comments(props) {
  const { feedbacks, slug } = props;
  return (
    <div>
      <Container>
        <CommentForm slug={slug} />
        <ShowComments comments={feedbacks} />
      </Container>
    </div>
  );
}

export default Comments;
