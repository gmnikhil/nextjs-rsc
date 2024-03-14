import {
  PostCommentType,
  PostType,
  getPostComments,
} from "../services/post-service";
import { LoadingSkeleton } from "./skeleton";
import useSWR from "swr";

export const PostCommentsList = ({ post: { id } }: { post: PostType }) => {
  const { data } = useSWR(
    `/api/post/comments?postId=${id}`,
    () => getPostComments(id),
    {
      suspense: true,
    }
  );

  const comments = data as PostCommentType[];

  return (
    <div className="w-full flex flex-col gap-4 overflow-y-auto">
      {comments.map((comment) => (
        <div
          key={comment.id}
          className="w-full flex flex-col gap-2 p-4 bg-slate-50 rounded-md hover:shadow-lg hover:shadow-slate-200"
        >
          <p className="text-sm font-semibold">{comment.name}</p>
          <i className="text-xs lowercase">{comment.email}</i>
          <p className="text-xs font-light">{comment.body}</p>
        </div>
      ))}
    </div>
  );
};

export const LoadingPostCommentsListSkeleton = () => {
  return (
    <div className="w-full flex flex-col gap-4 overflow-y-auto">
      {[...Array(3)].map((_, index) => (
        <div
          key={index}
          className="w-full flex flex-col p-4 bg-slate-50 rounded-md"
        >
          <LoadingSkeleton containerClassName="h-fit w-3/4" />
          <LoadingSkeleton containerClassName="h-fit w-28" />
          <LoadingSkeleton containerClassName="h-fit w-2/3" height={10} />
          <LoadingSkeleton containerClassName="h-fit w-1/3" height={10} />
        </div>
      ))}
    </div>
  );
};
