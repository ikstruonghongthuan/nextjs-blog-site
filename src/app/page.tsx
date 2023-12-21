import axios from "axios";

import Blog from "@/types/Blog";

import BlogCard from "@/components/BlogCard";

import blogsMock from "@/mocks/db.json";

import styles from "./home.module.scss";

export default async function Home() {
  // const blogs = await axios
  //   .get<Array<Blog>>("http://localhost:3001/blogs", {
  //     headers: {
  //       Accept: "application/json",
  //     },
  //   })
  //   .then<Array<Blog>>(
  //     (response) =>
  //       new Promise((resolve) => setTimeout(() => resolve(response.data), 3000))
  //   );
  // .then((response) => response.data);
  const blogs = blogsMock.blogs;

  return (
    <>
      <main className={styles["blog-container"]}>
        {blogs.map((blog: any) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </main>
    </>
  );
}
