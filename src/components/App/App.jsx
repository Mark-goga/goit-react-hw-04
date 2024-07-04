import SearchBar from "../SearchBar/SearchBar";
import { fetchImage } from "../../feach-api";
import { useEffect, useState } from "react";
import ImageGallery from "../ImageGallery/ImageGallery";

export default function App() {
  const [images, setImages] = useState([]);
  const [topic, setTopic] = useState("");

  useEffect(() => {
    if (topic === "") {
      return;
    }
    async function getImages(){
      try {
        const image = await fetchImage(topic);
        console.log(image);
        setImages(image);
      }catch(error) {
        console.log(error);
      } finally {
        
      }
    }
    getImages();
  } , [topic])
  function handleSurch(newTopic) {
    setTopic(newTopic);
    setImages([]);
  }
  return (
    <div>
      <SearchBar onSearch={handleSurch} />
      <ImageGallery images={images} />
    </div>
  );
}