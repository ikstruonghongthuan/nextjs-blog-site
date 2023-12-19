import { UUID } from "crypto";

type Blog = {
  id: UUID;
  title: string;
  content: string;
};

export default Blog;
