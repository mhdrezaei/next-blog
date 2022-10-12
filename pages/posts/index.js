import PageBreadcrumbs from "../../components/layout/breadcrumb";
import {useRouter} from "next/router"
import { Fragment } from "react";
import ListPost from "../../components/posts/list-post";
import { getAllPost } from "../../helper/util-post";


function AllPostPage(props){
    const router = useRouter();
    const path = router.pathname;
    return(
        <Fragment>
        <PageBreadcrumbs url={path} />
        <ListPost posts={props.posts} heading='All Posts' showBtn='' linkTo='' />
        </Fragment>
        

    )
}

export async function getStaticProps(){
    // const fetchedData = getData();
    const allPost = getAllPost();
    console.log(allPost)

    return{
        props:{
            posts : allPost
        }
    }
}

export default AllPostPage;