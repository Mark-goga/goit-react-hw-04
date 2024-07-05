import SearchBar from "../SearchBar/SearchBar";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import { fetchImage } from "../../feach-api";
import { useEffect, useState } from "react";
import ImageGallery from "../ImageGallery/ImageGallery";

export default function App() {
  const [images, setImages] = useState([]);
  const [topic, setTopic] = useState("");
  const [page, setPage] = useState(1);
  useEffect(() => {
    if (topic === "") {
      return;
    }
    async function getImages(){
      try {
        const image = await fetchImage(topic , page);
        console.log(image);
        setImages((prevImage) => {
          return [...prevImage , ...image]
        });
      }catch(error) {
        console.log(error);
      } finally {
        
      }
    }
    getImages();
  }, [topic, page])
  
  function handleSurch(newTopic) {
    setTopic(newTopic);
    setImages([]);
    setPage(1);
  }
  function handleClick() {
    setPage(page + 1);
  }

  return (
    <div>
      <SearchBar onSearch={handleSurch} />
      <ImageGallery images={images} />
      {images.length > 0 && <LoadMoreBtn onLoadMore={handleClick} />}
    </div>
  );
}