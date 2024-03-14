import { JSX } from "react";
import Skeleton, { SkeletonProps } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const LoadingSkeleton = (
  props: JSX.IntrinsicAttributes & SkeletonProps
) => {
  return <Skeleton {...props} />;
};

export const LoadingPostSkeleton = () => {
  return (
    <div className="w-full flex flex-col bg-slate-100 rounded-md p-4">
      <LoadingSkeleton containerClassName="h-fit w-full" />
      <LoadingSkeleton containerClassName="h-fit w-3/4" height={10} />
      <LoadingSkeleton containerClassName="h-fit w-2/3" height={10} />
      <LoadingSkeleton containerClassName="h-fit w-1/4" height={10} />
    </div>
  );
};

export const LoadingPostsSkeleton = () => {
  return (
    <div className="w-full h-full pr-2 flex flex-col gap-4 overflow-y-auto">
      {[...Array(5)].map((_, index) => (
        <LoadingPostSkeleton key={index} />
      ))}
    </div>
  );
};
