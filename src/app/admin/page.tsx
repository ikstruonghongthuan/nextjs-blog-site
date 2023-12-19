"use client";

import React, { useEffect, useRef, useState } from "react";
// import { v4 } from "uuid";
const { v4 } = require("uuid");
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import BlogCard from "@/components/BlogCard";

import homeStyles from "../home.module.scss";
import styles from "./styles.module.scss";
import { useAppDispatch, useAppSelector } from "@/lib/hook";
import { addNewBlog, fetchBlogs } from "@/slices/blog";
import Blog from "@/types/Blog";
import Loading from "../loading";

export default function Home() {
  const [isModalOpened, setIsModalOpen] = useState(false);
  const [isActionLoading, setIsActionLoading] = useState(false);

  const blogSelector = useAppSelector((state) => state.blog);
  const { blogs, isLoading } = blogSelector;
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchBlogs());
  }, []);

  const onSubmit = () => {
    setIsActionLoading(true);
    dispatch(
      addNewBlog({
        blog: {
          id: v4(),
          title: (document.getElementById("title") as HTMLInputElement).value,
          content: (document.getElementById("content") as HTMLInputElement)
            .value,
        },
        callback: () => {
          setIsModalOpen(false);
          setIsActionLoading(false);
        },
      })
    );
  };

  return (
    <>
      <main
        className={`${homeStyles["blog-container"]} ${styles["blog-container"]}`}
      >
        <button
          className={styles["create-new-button"]}
          onClick={() => {
            setIsModalOpen(true);
          }}
        >
          Create a blog
        </button>
        {isLoading ? (
          <Loading />
        ) : (
          blogs.map((blog: Blog) => (
            <BlogCard key={blog.id} blog={blog} isAdminMode />
          ))
        )}
      </main>
      <Modal
        open={isModalOpened}
        onClose={() => {
          setIsModalOpen(false);
        }}
        className={styles["blog-card-modal"]}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Container
          component="main"
          fixed
          disableGutters
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "56px",
            width: "fit-content",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              background: "white",
              padding: "24px",
              borderRadius: "20px",
            }}
          >
            <Typography component="h1" variant="h5">
              Create a blog
            </Typography>
            <Box component="form" noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="title"
                label="Title"
                name="title"
                autoFocus
                disabled={isActionLoading}
              />
              <TextField
                multiline
                margin="normal"
                required
                fullWidth
                name="content"
                label="Content"
                type="content"
                id="content"
                rows={4}
                disabled={isActionLoading}
              />
              <Button
                component="button"
                onClick={onSubmit}
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                disabled={isActionLoading}
              >
                {isActionLoading ? "Adding..." : "Add"}
              </Button>
            </Box>
          </Box>
        </Container>
      </Modal>
    </>
  );
}
