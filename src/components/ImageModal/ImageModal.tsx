import Modal from "react-modal";
import css from "./ImageModal.module.css";
import { SelectedPhoto } from "../App/App";

interface ImageModal{
  selectedPhoto: SelectedPhoto; 
  isOpen: boolean; 
  onRequestClose: ()=>void;
}

export default function ImageModal({ selectedPhoto, isOpen, onRequestClose }:ImageModal) {
  
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={css.Modal}
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 10, 0.75)",
          position: "fixed",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        },
        content: {
          inset: 0,
          margin: "auto",
          padding: "auto",
          overflow: "hidden",
          background: "transparent",
          border: "none",
          position: "relative",
          maxHeight: "90%",
        },
      }}
    >
      <div>
        <div className={css.imgContainer}>
          {selectedPhoto && (
            <img
              src={selectedPhoto.url}
              alt={selectedPhoto.description}
              className={css.img}
            />
          )}
        </div>

        {selectedPhoto && (
          <p className={css.likes}>Likes: {selectedPhoto.likes}</p>
        )}
      </div>
    </Modal>
  );
}
