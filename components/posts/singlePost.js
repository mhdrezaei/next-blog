import { Container, styled } from '@mui/system'
import React from 'react'
import Image from 'next/image'
import theme from '../layout/theme'
import IconLabelButtons from '../ui/button-showall'
import HeaderPost from './header-post'
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
        padding : 20
    }

})
function SinglePost(props) {
    const {post} = props;
    const { title, description , date , image } = post[0];
    console.log(title)
    const newDate = new Date(date).toLocaleString('en-us' , {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })
  return (
    <div>
        <Container>
        <Wrapper>
        <HeaderPost title={title} image={image} date={newDate} />
            <div className='image' >
                <Image src={image} alt={title} width={1152} height={700} />
            </div>            
            <p className='description'>{description}</p>
        </Wrapper>  

        <IconLabelButtons path='/posts' />
        </Container>
    </div>
  )
}

export default SinglePost