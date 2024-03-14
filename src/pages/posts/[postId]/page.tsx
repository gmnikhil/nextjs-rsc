import { LoadingPostWithCommentsSkeleton } from "../../../components/post-with-comments";
import { Suspense, lazy } from "react";

import { useParams } from "react-router-dom";

const PostWithComments = lazy(() =>
  import("../../../components/post-with-comments").then((module) => ({
    default: module.PostWithComments,
  }))
);

export default function PostItemPage() {
  const { id: postId } = useParams();
  return (
    <Suspense fallback={<LoadingPostWithCommentsSkeleton />}>
      <PostWithComments key={postId} postId={postId!} />
    </Suspense>
  );
}
