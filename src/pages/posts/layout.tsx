import { LoadingPostsSkeleton } from "../../components/skeleton";

import { Suspense, lazy } from "react";
import { Outlet } from "react-router-dom";

const Posts = lazy(() =>
  import("../../components/posts").then((module) => ({ default: module.Posts }))
);

export default function PostsLayout() {
  return (
    <div className="w-full max-h-screen p-2 flex flex-row gap-2">
      {/*   left side listing layout */}
      <div className="w-1/3 flex flex-col gap-2">
        <h1>Posts</h1>
        <Suspense fallback={<LoadingPostsSkeleton />}>
          <Posts />
        </Suspense>
      </div>
      {/*   right side post item layout */}
      <div className="w-2/3 flex flex-col gap-2">
        <Outlet />
      </div>
    </div>
  );
}
