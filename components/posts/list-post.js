import { Container, Grid } from '@mui/material';
import React from 'react'
import PostItem from './post-item';


function ListPost(props) {
  const {posts} = props;
  const {heading} = props;
  return (
    <Container>
      <h2>{heading}</h2>
      <Grid container spacing={2} >
      {props.posts.map((post) => <PostItem post={post} />)}

      </Grid>
    </Container>
  )
}

export default ListPost