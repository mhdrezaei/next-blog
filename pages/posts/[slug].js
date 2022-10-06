import { getData } from "../../helper/util-post";
import PostItem from "../../components/posts/post-item";
import { Fragment } from "react";
import { Breadcrumbs } from "@mui/material";
import {useRouter} from "next/router"
import PageBreadcrumbs from "../../components/layout/breadcrumb";
import SinglePost from "../../components/posts/singlePost";


function SinglePostPage(props){
    
    const router = useRouter();
    const path = router.asPath;
    return(
        <Fragment>
        <PageBreadcrumbs url={path}/>
        <SinglePost post={props.post} />
        {/* <PostItem post={props.post} /> */}
        </Fragment>
    )
}



export async function getServerSideProps(context){
const {params} = context;
const slug = params.slug;
const fetchedData = getData();
const thePost = fetchedData.posts.filter(post => post.slug === slug);


return {
    props:{
        post : thePost
    }
}

}


export default SinglePostPage;