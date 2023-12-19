import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@/lib/store";
import Blog from "@/types/Blog";
import axios from "axios";
import { UUID } from "crypto";

// Middleware
const fetchBlogs = createAsyncThunk("fetchBlogs", async () => {
  const blogs = await axios
    .get<Array<Blog>>("http://localhost:3001/blogs", {
      headers: {
        Accept: "application/json",
      },
    })
    .then((response) => response.data);

  return blogs;
});

const addNewBlog = createAsyncThunk(
  "postBlog",
  async ({ blog, callback }: { blog: Blog; callback: Function }) => {
    const status = await axios
      .post("http://localhost:3001/blogs", blog)
      .then((response) => response.status);

    if (status === 201) {
      callback();
    }
  }
);

const deleteBlog = createAsyncThunk(
  "deleteBlog",
  async ({ id, callback }: { id: UUID; callback: Function }) => {
    const status = await axios
      .delete(`http://localhost:3001/blogs/${id}`)
      .then((response) => response.status);

    return id;
  }
);

// Define a type for the slice state
interface BlogList {
  isLoading: boolean;
  blogs: Array<Blog>;
}

// Define the initial state using that type
const initialState: BlogList = {
  isLoading: true,
  blogs: [],
};

export const blogSlice = createSlice({
  name: "blog",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // fetchBlogs: (state /*, action: PayloadAction<Array<Blog>> */) => {
    //   state.isLoading = true;
    // },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchBlogs.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchBlogs.fulfilled, (state, action) => {
      state.isLoading = false;
      state.blogs = action.payload;
    });
    builder.addCase(addNewBlog.fulfilled, (state, action) => {});
    builder.addCase(deleteBlog.fulfilled, (state, action) => {
      state.blogs = [
        ...state.blogs.filter((blog) => blog.id !== action.payload),
      ];
    });
  },
});

export const {} = blogSlice.actions;
export { fetchBlogs, addNewBlog, deleteBlog };

// Other code such as selectors can use the imported `RootState` type
export const selectBlogs = (state: RootState) => state.blog.blogs;

export default blogSlice.reducer;
