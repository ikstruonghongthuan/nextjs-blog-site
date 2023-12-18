"use client";

import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import BlogCard from "@/components/BlogCard";

import homeStyles from "../home.module.scss";
import styles from "./styles.module.scss";

export default function Home() {
  const [isModalOpened, setIsModalOpen] = useState(false);

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
        <BlogCard isAdminMode />
        <BlogCard isAdminMode />
        <BlogCard isAdminMode />
        <BlogCard isAdminMode />
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
              Sign in
            </Typography>
            <Box component="form" noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                multiline
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                rows={4}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
            </Box>
          </Box>
        </Container>
      </Modal>
    </>
  );
}
