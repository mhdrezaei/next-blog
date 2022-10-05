import React from "react";
import { alpha, styled } from "@mui/system";
import Image from "next/image";
import theme from "../layout/theme";
const HeroDiv = styled("div")({
  color: theme.palette.secondary.main,
  backgroundColor: theme.palette.primary.light,
  padding: 30,
  textAlign: "center",
  "& .image-hero": {
    backgroundColor : theme.palette.secondary.main,
    width: "300px",
    height: "300px",
    border : '5px solid',
    borderRadius: "50%",
    overflow: "hidden",
    margin: "auto",
    boxShadow: `0px 0px 0px 14px ${alpha(theme.palette.secondary.main, 0.16)}`,
  },
  "& .hero-title" : {
    fontSize : '30px',
    fontFamily : 'cursive'
  }
});
const ImgHero = styled("div")({
  width: "300px",
  height: "300px",
  borderRadius: "50%",
  overflow: "hidden",
  margin: "auto",
});
function Hero() {
  return (
    <section>
      <HeroDiv className="hero">
        <div className="image-hero">
          <Image
            src="/images/mhdr.jpg"
            alt="mohammad rezaei"
            width={300}
            height={300}
          />
        </div>
        <h1 className="hero-title"> Hi , I'm Mohammad Rezaei </h1>
        <p className="hero-description">
          this blog is about develompment Front-end like React
        </p>
      </HeroDiv>
    </section>
  );
}

export default Hero;
