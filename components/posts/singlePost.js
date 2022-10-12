import { Container, styled } from '@mui/system'
import React from 'react'
import Image from 'next/image'
import theme from '../layout/theme'
import IconLabelButtons from '../ui/button-showall'
import HeaderPost from './header-post'
import ReactMarkdown from "react-markdown"
const Wrapper = styled('div')({
    position : "relative",
    backgroundColor : theme.palette.secondary.main,
    borderRadius : 10,
    marginTop : 50,
    overflow: "hidden",
    boxShadow : "0 0 8px #666",

    "& .image":{
        overflow: "hidden",
        filter : "blur(3px)"
    },
    "& .head-post":{
        display : "flex",
        justifyContent : "space-between",
        alignItems : "center",
        padding : 10,
    },
    "& .description" :{
        padding : 20,
        "& a":{
            textDecoration : "underline",
            color : theme.palette.primary.main
        }
    }

})
function SinglePost(props) {
    const {post} = props;
    const { title, description , date , image , content } = post;
    const src = `/images/posts/${image}`
    console.log(content)
    const newDate = new Date(date).toLocaleString('en-us' , {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })
  return (
    <div>
        <Container>
        <Wrapper>
        <HeaderPost title={title} image={src} date={newDate} />
            <div className='image' >
                <Image src={src} alt={title} width={1152} height={700} />
            </div>      
            <p className='description'>
            <ReactMarkdown>{content}</ReactMarkdown>      
            </p>
        </Wrapper>  

        <IconLabelButtons path='/posts' />
        </Container>
    </div>
  )
}

export default SinglePost