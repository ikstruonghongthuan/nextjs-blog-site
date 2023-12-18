"use client";
import React, { useState } from "react";
import Modal from "@mui/material/Modal";

import styles from "./styles.module.scss";

const BlogCard = ({ isAdminMode = false }: { isAdminMode?: boolean }) => {
  const [isModalOpened, setIsModalOpen] = useState(false);

  return (
    <>
      <div className={styles["blog-card"]}>
        <div className={styles["blog-card-wrapper"]}>
          <h2 className={styles["blog-card__title"]}>Tiêu đề blog</h2>
          <p className={styles["blog-card__content"]}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            nulla arcu, venenatis consequat libero ut, viverra molestie mi.
            Nulla efficitur id ante at ultricies. Quisque faucibus turpis mi, id
            pellentesque justo accumsan eget. Pellentesque habitant morbi
            tristique senectus et netus et malesuada fames ac turpis egestas.
            Mauris auctor libero eu nibh volutpat, eget interdum nibh sodales.
            Cras sed felis elit. Fusce eu dui justo. Donec eu erat quam. Etiam
            pretium tincidunt arcu, ut vestibulum ante ultricies vel. Duis
            blandit odio sit amet ante hendrerit, auctor faucibus velit laoreet.
            Praesent aliquam, dolor sed faucibus facilisis, mauris risus
            consequat enim, sit amet viverra elit massa vel turpis. Morbi
            tincidunt mollis tellus sit amet dictum. Pellentesque sit amet est
            et arcu auctor feugiat id sit amet nisi. Maecenas pellentesque sem
            vitae malesuada interdum. Maecenas turpis nisi, ornare at ligula
            iaculis, egestas luctus lorem. Praesent non accumsan nunc. Sed
            eleifend risus nec nunc maximus convallis. Praesent quis libero leo.
            Nulla at felis in libero eleifend sodales nec ut ante. Sed ut ligula
            sit amet lectus euismod pretium at sed nulla. Etiam auctor facilisis
            nunc ut pellentesque. Vivamus cursus cursus magna, tempor pretium
            nisi porta id. Nulla finibus nulla turpis, sed aliquet est tincidunt
            ac. Pellentesque pellentesque arcu sit amet tellus porttitor
            dapibus. Donec lorem nulla, viverra ut justo ut, aliquam porttitor
            nisi. Mauris nec lacinia magna, et tristique neque. Quisque ac eros
            nec dolor porttitor porttitor fermentum eu est. Vestibulum ante
            ipsum primis in faucibus orci luctus et ultrices posuere cubilia
            curae; In aliquet orci mauris, ut eleifend quam faucibus eget.
            Nullam ante augue, tempus quis varius in, pretium sed est. Nulla
            ornare aliquam nisi, eu pulvinar est suscipit at. Class aptent
            taciti sociosqu ad litora torquent per conubia nostra, per inceptos
            himenaeos. Donec congue libero ipsum, in bibendum sapien bibendum
            eget. Cras condimentum felis a justo ultricies, eu posuere nisi
            sagittis. Ut sodales imperdiet lectus non viverra. In sagittis
            egestas felis, non vehicula massa sollicitudin sit amet. Cras
            lacinia rutrum tempus. Vestibulum at nulla iaculis, fermentum erat
            nec, viverra risus. Nulla facilisi. Proin sollicitudin, nulla sed
            lobortis bibendum, dolor justo dignissim augue, id facilisis ex mi
            eget eros. Nunc commodo elementum est eget consectetur. Etiam
            eleifend eros et arcu tincidunt, ut efficitur ipsum porta. Aliquam
            sed tristique eros, ut euismod purus.
          </p>
        </div>
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
          <button
            className={`${styles["blog-card__button"]} ${styles["blog-card__button--delete-button"]}`}
          >
            Remove
          </button>
        )}
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
        <p className={styles["blog-card-modal__content"]}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          nulla arcu, venenatis consequat libero ut, viverra molestie mi. Nulla
          efficitur id ante at ultricies. Quisque faucibus turpis mi, id
          pellentesque justo accumsan eget. Pellentesque habitant morbi
          tristique senectus et netus et malesuada fames ac turpis egestas.
          Mauris auctor libero eu nibh volutpat, eget interdum nibh sodales.
          Cras sed felis elit. Fusce eu dui justo. Donec eu erat quam. Etiam
          pretium tincidunt arcu, ut vestibulum ante ultricies vel. Duis blandit
          odio sit amet ante hendrerit, auctor faucibus velit laoreet. Praesent
          aliquam, dolor sed faucibus facilisis, mauris risus consequat enim,
          sit amet viverra elit massa vel turpis. Morbi tincidunt mollis tellus
          sit amet dictum. Pellentesque sit amet est et arcu auctor feugiat id
          sit amet nisi. Maecenas pellentesque sem vitae malesuada interdum.
          Maecenas turpis nisi, ornare at ligula iaculis, egestas luctus lorem.
          Praesent non accumsan nunc. Sed eleifend risus nec nunc maximus
          convallis. Praesent quis libero leo. Nulla at felis in libero eleifend
          sodales nec ut ante. Sed ut ligula sit amet lectus euismod pretium at
          sed nulla. Etiam auctor facilisis nunc ut pellentesque. Vivamus cursus
          cursus magna, tempor pretium nisi porta id. Nulla finibus nulla
          turpis, sed aliquet est tincidunt ac. Pellentesque pellentesque arcu
          sit amet tellus porttitor dapibus. Donec lorem nulla, viverra ut justo
          ut, aliquam porttitor nisi. Mauris nec lacinia magna, et tristique
          neque. Quisque ac eros nec dolor porttitor porttitor fermentum eu est.
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia curae; In aliquet orci mauris, ut eleifend quam
          faucibus eget. Nullam ante augue, tempus quis varius in, pretium sed
          est. Nulla ornare aliquam nisi, eu pulvinar est suscipit at. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos. Donec congue libero ipsum, in bibendum sapien
          bibendum eget. Cras condimentum felis a justo ultricies, eu posuere
          nisi sagittis. Ut sodales imperdiet lectus non viverra. In sagittis
          egestas felis, non vehicula massa sollicitudin sit amet. Cras lacinia
          rutrum tempus. Vestibulum at nulla iaculis, fermentum erat nec,
          viverra risus. Nulla facilisi. Proin sollicitudin, nulla sed lobortis
          bibendum, dolor justo dignissim augue, id facilisis ex mi eget eros.
          Nunc commodo elementum est eget consectetur. Etiam eleifend eros et
          arcu tincidunt, ut efficitur ipsum porta. Aliquam sed tristique eros,
          ut euismod purus.
        </p>
      </Modal>
    </>
  );
};

export default BlogCard;
