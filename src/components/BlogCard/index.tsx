"use client";
import React, { useState } from "react";
import Modal from "@mui/material/Modal";

import { useAppDispatch, useAppSelector } from "@/lib/hook";

import Blog from "@/types/Blog";

import styles from "./styles.module.scss";
import { deleteBlog } from "@/slices/blog";

const BlogCard = ({
  isAdminMode = false,
  blog,
}: {
  isAdminMode?: boolean;
  blog: Blog;
}) => {
  const [isModalOpened, setIsModalOpen] = useState(false);
  const [isActionLoading, setIsActionLoading] = useState(false);

  const dispatch = useAppDispatch();

  const onClickDelete = () => {
    setIsActionLoading(true);
    dispatch(
      deleteBlog({
        id: blog.id,
        callback: () => {
          setIsModalOpen(false);
          setIsActionLoading(false);
        },
      })
    );
  };

  return (
    <>
      <div className={styles["blog-card"]}>
        <div className={styles["blog-card__wrapper"]}>
          <h2 className={styles["blog-card__title"]}>{blog?.title}</h2>
          <p className={styles["blog-card__content"]}>{blog?.content}</p>
        </div>
        <div className={styles["blog-card__button-group"]}>
          <button
            className={`${styles["blog-card__button"]} ${styles["blog-card__button--read-more"]}`}
            type="button"
            onClick={() => {
              setIsModalOpen(true);
            }}
          >
            Read More
          </button>
          {isAdminMode && (
            <>
              <button
                className={`${styles["blog-card__button"]} ${styles["blog-card__button--delete-button"]}`}
                onClick={onClickDelete}
                disabled={isActionLoading}
              >
                Remove
              </button>
            </>
          )}
        </div>
      </div>
      <Modal
        open={isModalOpened}
        onClose={() => {
          setIsModalOpen(false);
        }}
        className={styles["blog-card-modal"]}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <p className={styles["blog-card-modal__content"]}>{blog?.content}</p>
      </Modal>
    </>
  );
};

export default BlogCard;
