import BlogCard from "@/components/BlogCard";

import styles from "./home.module.scss";
import Blog from "@/types/Blog";

export default async function Blogs() {
  const dynamicData = await fetch(`http://localhost:3001/blogs`, {
    cache: "no-store",
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  });
  const blogs = await dynamicData.json();

  return (
    <>
      <main className={styles["blog-container"]}>
        {blogs.map((blog: Blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </main>
    </>
  );
}
