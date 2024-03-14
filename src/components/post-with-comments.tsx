import { PostType, getPost } from "../services/post-service";

import {
  AuthorDetails,
  LoadingAuthorSkeleton,
} from "../components/author-details";
import {
  LoadingPostCommentsListSkeleton,
  PostCommentsList,
} from "../components/post-comments-list";
import {
  LoadingPostDetailsSkeleton,
  PostDetails,
} from "../components/post-details";
import { Suspense } from "react";
import useSWR from "swr";

export const PostWithComments = ({ postId }: { postId: string }) => {
  const { data: postData } = useSWR(
    `/api/post/${postId}`,
    () => getPost(postId),
    {
      suspense: true,
    }
  );

  const post = postData as PostType;

  return (
    <div className="w-full flex flex-col gap-2 pt-6 px-2">
      <div className="flex flex-col gap-2">
        <PostDetails post={post} />
        <Suspense fallback={<LoadingAuthorSkeleton />}>
          <AuthorDetails authorId={post.userId} />
        </Suspense>
      </div>
      <hr className="w-full border-t border-slate-200 my-2" />
      <div className="flex flex-col h-[75vh]">
        <Suspense fallback={<LoadingPostCommentsListSkeleton />}>
          <PostCommentsList key={post.id} post={post} />
        </Suspense>
      </div>
    </div>
  );
};

export const LoadingPostWithCommentsSkeleton = () => {
  return (
    <div className="w-full flex flex-col gap-2 pt-6 px-2">
      <div className="flex flex-col gap-2">
        <LoadingPostDetailsSkeleton />
        <LoadingAuthorSkeleton />
      </div>
      <hr className="w-full border-t border-slate-200 my-2" />
      <div className="flex flex-col h-[75vh]">
        <LoadingPostCommentsListSkeleton />
      </div>
    </div>
  );
};
