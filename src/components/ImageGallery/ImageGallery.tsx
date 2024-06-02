import ImageCard from "../ImageCard/ImageCard";
import { Photo } from "../../photos-api";
import css from "./ImageGallery.module.css";

interface ImageGallery{ 
  items: Photo[];
  onOpenModal: (item: Photo)=>void; 
}

export default function ImageGallery({ items, onOpenModal }: ImageGallery) {
  return (
    <ul className={css.list}>
      {items.map((item: Photo) => (
        <li key={item.id}>
          <ImageCard
            src={item.urls}
            alt={item.alt_description}
            likes={item.likes}
            onClick={() => onOpenModal(item)}
          />
        </li>
      ))}
    </ul>
  );
}
