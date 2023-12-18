import { CircularProgress } from "@mui/material";

import BlogCard from "@/components/BlogCard";

import styles from "./home.module.scss";

export default function Home() {
  return (
    <>
      <main className={styles["blog-container"]}>
        <CircularProgress className="text-white" size={60} />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </main>
    </>
  );
}
