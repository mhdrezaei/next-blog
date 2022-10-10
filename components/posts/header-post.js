import React from 'react'
import { Container, styled } from '@mui/system'
import Image from 'next/image';
import theme from '../layout/theme';
const HeadPost = styled('div')({
    display : "flex",
    alignItems : "center",
    padding :10,
    width : "80%",
    zIndex : 1,
    justifyContent : "space-between",
    position : "absolute",
    top : "22%",
    left : "10%",
    borderRadius : 10,
    backgroundColor:"#e4e4e4c9",
    "& .title-date":{
      display : "flex",
      flexDirection : "column",
      width : "100%"
    },
    "& .post-date" :{
      fontSize : "16px",
      fontFamily : "cursive",
      width : "max-content",
      margin : "0 auto",
      padding : "5px 10px",
      borderRadius : "5px",
      backgroundColor : theme.palette.primary.light,
      color : "#1ff"
    },
    "& .post-title" :{
        color : theme.palette.primary.light,
        fontFamily:"cursive",
        width : "100%",
        textAlign : "center",
        borderButtom : "5px solid #26266e !important"
    },
    "& .post-thumb" :{
        borderRadius : 10 ,
        border : "5px solid #26266e !important"
    }
})
function HeaderPost(props) {
  return (
    <HeadPost>
    <div className='title-date'>
    <h1 className='post-title'>{props.title}</h1>
    <span className='post-date' >{props.date}</span>
    </div>
    <Image className='post-thumb'  src={props.image} width={600} height={500}/>
    </HeadPost>
  )
}

export default HeaderPost;