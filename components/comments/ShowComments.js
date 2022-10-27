import React, { useEffect, useState } from "react";
import CommentItem from "./CommentItem";

function ShowComments(props) {
  const { comments } = props;
  console.log(comments);
  return (
    <div>
      <h1>Comments</h1>

      {comments && comments.feedbacks.map((feedback) => {
        return (
          <CommentItem
            key={feedback.id}
            name={feedback.name}
            message={feedback.message}
          />
        );
      })}
    </div>
  );
}

export default ShowComments;
