import styled from '@emotion/styled'
import React from 'react'

const CommentBody = styled('div')({

})


function CommentItem(props) {
    const { name , message } = props;
    console.log(props)
  return (

    <div>
    <h1>{message}</h1>
    <br/>
    <p>{name}</p>
    </div>


    )
}

export default CommentItem