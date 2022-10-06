import { Container, Grid } from '@mui/material';
import React from 'react'
import IconLabelButtons from '../ui/button-showall';
import PostItem from './post-item';


function ListPost(props) {
  const { heading , showBtn} = props;
  return (
    <Container>
      <h1 className='heading'>{heading}</h1>
      <Grid container spacing={2} >
      {props.posts.map((post) => <PostItem post={post} />)}

      </Grid>

     {showBtn && <IconLabelButtons path={props.linkTo} />}
    </Container>
  )
}

export default ListPost