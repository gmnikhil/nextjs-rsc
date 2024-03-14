import { PostType } from "../services/post-service";
import { NavLink } from "react-router-dom";

export const Post = ({ post }: { post: PostType }) => {
  return (
    <NavLink to={`/posts/${post.id}`}>
      <div className="w-full bg-slate-100 rounded-md p-4 hover:shadow-lg hover:shadow-slate-200 hover:cursor-pointer">
        <h3 className="text-md text-semibold">{post.title}</h3>
        <p className="text-xs text-light">{post.body}</p>
      </div>
    </NavLink>
  );
};
