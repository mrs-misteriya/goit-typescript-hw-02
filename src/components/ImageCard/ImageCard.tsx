// import { Photo } from "../../photos-api";
// import css from "./ImageCard.module.css";

// interface ImageCard{
//     item: Photo;
//     onOpenModal: (photo: Photo) =>void; 
// }

// export default function ImageCard({ src, alt, likes, onOpenModal }:ImageCard) {
//   return (
//     <div className={css.imgContainer}>
//       <img
//         src={src.small}
//         alt={alt}
//         onClick={onOpenModal}
//         className={css.img}
//         width={400}
//         height={260}
//       />
//       <p className={css.imgP}>Likes: {likes}</p>
//     </div>
//   );
// }


import { Photo } from "../../photos-api";
import css from "./ImageCard.module.css";

interface ImageCard {
  src: {
    small: string;
  };
  alt: string;
  likes: number;
  onClick: () => void;
}

export default function ImageCard({ src, alt, likes, onClick }: ImageCard) {
  return (
    <div className={css.imgContainer}>
      <img
        src={src.small}
        alt={alt}
        onClick={onClick}
        className={css.img}
        width={400}
        height={260}
      />
      <p className={css.imgP}>Likes: {likes}</p>
    </div>
  );
}