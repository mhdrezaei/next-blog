import { Container, styled } from '@mui/system'
import React from 'react'
import Image from 'next/image'
import theme from '../layout/theme'
import IconLabelButtons from '../ui/button-showall'
const Wrapper = styled('div')({
    backgroundColor : theme.palette.secondary.main,
    borderRadius : 10,
    marginTop : 50,
    overflow: "hidden",
    boxShadow : "0 0 8px #666",

    "& .image":{
        overflow: "hidden",
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
    console.log(props)
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
            <div className='image' >
                <Image src={image} alt={title} width={1152} height={700} />
            </div>
            <div className='head-post'>
            <h2>{title}</h2>
            <span>{newDate}</span>
            </div>
            <hr/>
            <p className='description'>{description}</p>
        </Wrapper>  

        <IconLabelButtons path='/posts' />
        </Container>
    </div>
  )
}

export default SinglePost