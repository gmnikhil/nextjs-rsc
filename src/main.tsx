import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PostItemPage from "./pages/posts/[postId]/page.tsx";
import PostsPage from "./pages/posts/page.tsx";
import PostsLayout from "./pages/posts/layout.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/",
    element: <PostsLayout />,
    children: [
      {
        path: "/posts",
        element: <PostsPage />,
      },
      {
        path: "/posts/:id",
        element: <PostItemPage />,
      },
    ],
  },
  {
    path: "/posts/:id",
    element: <PostItemPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
