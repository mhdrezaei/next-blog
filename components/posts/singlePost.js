import { Container, styled } from "@mui/system";
import React from "react";
import Image from "next/image";
import theme from "../layout/theme";
import IconLabelButtons from "../ui/button-showall";
import HeaderPost from "./header-post";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
const Wrapper = styled("div")({
  position: "relative",
  backgroundColor: theme.palette.secondary.main,
  borderRadius: 10,
  marginTop: 50,
  overflow: "hidden",
  boxShadow: "0 0 8px #666",

  "& .image": {
    overflow: "hidden",
    filter: "blur(3px)",
  },
  "& .head-post": {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  "& .description": {
    padding: 20,
    "& a": {
      textDecoration: "underline",
      color: theme.palette.primary.main,
    },
  },
});
function SinglePost(props) {
  const { post } = props;
  const { title, description, date, image, content } = post;
  const path = `/images/posts/${image}`;
  const newDate = new Date(date).toLocaleString("en-us", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const cutomRenderers = {
    img:({node , ...props}) =>{
      const {src , alt} = {...props};
     return <Image src={`/images/posts/${src}`} alt={alt} width={600} height={300}/>
      },
      code:({node , ...props}) => {
        const {className , children} = {...props};
        const lang = className.split("-");
        return <SyntaxHighlighter language={lang[1]}  style={atomDark} >{children}</SyntaxHighlighter>
      }
    // image(image) {
    //    return( <Image
    //       src={`/images/posts/${image.src}`}
    //       alt={image.alt}
    //       width={600}
    //       height={300}
    //     />
    //    )
    // },
  };
  return (
    <div>
      <Container>
        <Wrapper>
          <HeaderPost title={title} image={path} date={newDate} />
          <div className="image">
            <Image src={path} alt={title} width={1152} height={700} />
          </div>
          <div className="description">
            <ReactMarkdown   components={cutomRenderers}>{content}</ReactMarkdown>
          </div>
        </Wrapper>

        <IconLabelButtons path="/posts" />
      </Container>
    </div>
  );
}

export default SinglePost;
