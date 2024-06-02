import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import Loader from "../Loader/Loader";
import ImageGallery from "../ImageGallery/ImageGallery";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { fetchPhotos, Photo } from "../../photos-api";
import { useEffect, useState} from "react";
import toast from "react-hot-toast";
import Modal from "react-modal";
Modal.setAppElement("#root");

import css from "./App.module.css";

export interface SelectedPhoto{
  url: string;
  description: string;
  likes: number;
}

export default function App() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [modalIsOpen, setIsOpen] = React.useState<boolean>(false);

  const [selectedPhoto, setSelectedPhoto] = useState<null|SelectedPhoto>(null);

  const handleSearch = (newQuery: string):void => {
    setError(false);
    setQuery(newQuery);
    setPage(1);
    setPhotos([]);
  };

  const handleLoadMore = ():void => {
    setPage(page + 1);
  };

  useEffect(():void => {
    if (query === "") {
      return;
    }

    async function getPhotos() {
      try {
        setIsLoading(true);
        const data = await fetchPhotos({query, page});
        if (data.length === 0) {
          toast.error("Sorry, nothing was found for your request");
        }
        setPhotos((prevPhotos: Photo[]) => {
          return [...prevPhotos, ...data];
        });
      } catch (error) {
        setError(true);
        toast.error("Oops! Something wrong.. Please, reload page");
      } finally {
        setIsLoading(false);
      }
    }
    getPhotos();
  }, [query, page]);

  const openModal = ():void => {
    setIsOpen(true);
  };

  const afterOpenModal = (photo: Photo):void  => {
    setSelectedPhoto({
      url: photo.urls.regular,
      description: photo.alt_description,
      likes: photo.likes,
    });
    openModal();
  };

  const closeModal = ():void => {
    setIsOpen(false);
    setSelectedPhoto(null);
  };

  return (
    <div className={css.container}>
      <SearchBar onSubmit={handleSearch} />
      {error && <ErrorMessage />}
      {photos.length > 0 && (
        <ImageGallery items={photos} onOpenModal={afterOpenModal} />
      )}
      {isLoading && <Loader/>}
      {photos.length > 0 && photos.length > 14 && !isLoading && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
      {selectedPhoto && <ImageModal
        selectedPhoto={selectedPhoto}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      />}
    </div>
  );
}
