import { LoadingAuthorSkeleton } from "../../../components/author-details";
import { LoadingPostCommentsListSkeleton } from "../../../components/post-comments-list";
import { LoadingPostDetailsSkeleton } from "../../../components/post-details";

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
