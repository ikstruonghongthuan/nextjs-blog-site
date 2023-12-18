import BlogCard from "@/components/BlogCard";
import styles from "./home.module.scss";

export default function Home() {
  return (
    <>
      <main className={styles["blog-container"]}>
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </main>
    </>
  );
}
