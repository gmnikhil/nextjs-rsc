import { PostType, getPosts } from "../services/post-service";
import { Post } from "../components/post";
import useSWR, { preload } from "swr";

preload("/api/user", getPosts);

export const Posts = () => {
  const { data } = useSWR("/api/post", getPosts, {
    suspense: true,
  });
  const posts = data as PostType[];
  return (
    <div className="w-full h-full pr-2 flex flex-col gap-4 overflow-y-auto">
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};
