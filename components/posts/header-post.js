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
    <h1 className='post-title'>{props.title}</h1>
    <Image className='post-thumb'  src={props.image} width={600} height={500}/>
    </HeadPost>
  )
}

export default HeaderPost;