import SearchBar from "../SearchBar/SearchBar";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import { fetchImage } from "../../feach-api";
import { useEffect, useState } from "react";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import ImageModal from "../ImageModal/ImageModal";
export default function App() {
  const [images, setImages] = useState([]);
  const [topic, setTopic] = useState("");
  const [page, setPage] = useState(1);
  const [loader, setLoader] = useState(false);
  const [bigImage, setBIgImage] = useState('');
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  useEffect(() => {
    if (topic === "") {
      return;
    }
    async function getImages(){
      try {
        setLoader(true);
        const image = await fetchImage(topic, page);
        setImages((prevImage) => {
        return [...prevImage , ...image]
        });
      } catch (error) {
        setLoader(false);
      } finally {
        setLoader(false);
      }
    }
    getImages();
  }, [topic, page])
  
  function handleSurch(newTopic) {
    setTopic(newTopic);
    setImages([]);
    setPage(1);
  }
  function handleClickImg(url) {
    setBIgImage(url);
    setIsOpen(true);
  }
  function handleClick() {
    setPage(page + 1);
  }

  return (
    <div>
      <SearchBar onSearch={handleSurch} />
      <ImageGallery images={images} onClickImage={handleClickImg} />
      {images.length > 0 && !loader && <LoadMoreBtn onLoadMore={handleClick} />}
      {loader && <Loader />}
      <ImageModal closeModal={closeModal} modalIsOpen={modalIsOpen} imgUrl={bigImage} />
    </div>
  );
}