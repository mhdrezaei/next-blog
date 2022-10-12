import { Fragment } from "react";
import Hero from "../components/home/hero";
import ListPost from "../components/posts/list-post";
import { getFeaturedPost } from "../helper/util-post";
function HomePage(props){
    return(
        <Fragment>
            <Hero/>
            <ListPost posts={props.posts} heading='Featured Posts' showBtn='true' linkTo='/posts' />
        </Fragment>
    )
}

export async function getStaticProps(){

    // const featuredPost = fetchedData.posts.filter(post => post.isFeatured);
    const featuredPost = getFeaturedPost()
    return{
        props:{
            posts : featuredPost
        }
    }
}


export default HomePage;