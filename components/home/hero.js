import { Container } from '@mui/system'
import React from 'react'
import Image from 'next/image'
function Hero() {
  return (
    <section>
    <div className='hero' >

       <div className='img-hero' >
       Image
        {/* <Image src='' />  */}
       </div>
       <h1 className='hero-title' > Hi , I'm Mohammad Rezaei </h1>
       <p className='hero-description' >this blog is about develompment Front-end like React</p>
    </div>
    </section>
  )
}

export default Hero