import { getSinglePostData } from "../../helper/util-post";
import { Fragment } from "react";
import { useRouter } from "next/router";
import PageBreadcrumbs from "../../components/layout/breadcrumb";
import SinglePost from "../../components/posts/singlePost";
import Comments from "../../components/comments/Comments";
import { showFeedback } from "../../helper/util-contact";
function SinglePostPage(props) {
  const {feedbacks} = props
  
  const router = useRouter();
  const path = router.asPath;
  return (
    <Fragment>
      <PageBreadcrumbs url={path} />
      <SinglePost post={props.post} />
      <Comments slug={props.post.slug} feedbacks={feedbacks}  />
    </Fragment>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  const slug = params.slug
  const thePost = getSinglePostData(slug);
  const theFeedbacks = showFeedback(slug)
  return {
    props: {
      post: thePost,
      feedbacks : theFeedbacks
    }
  };
}

export default SinglePostPage;
