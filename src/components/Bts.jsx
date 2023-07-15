import React, { useState, useEffect } from "react";

export default function Bts() {
  const ImageSlider = () => {
    const [images, setImages] = useState([]);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
      const importAllImages = async () => {
        const imagePaths = import.meta.glob("../assets/photos/*.jpg");
        const imagesArray = await Promise.all(
          Object.values(imagePaths).map((imagePath) => imagePath()),
        );
        setImages(imagesArray);
      };

      importAllImages();
    }, []);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 2000);

      return () => {
        clearInterval(interval);
      };
    }, [images]);

    if (images.length === 0) {
      return <div>No images found</div>;
    }

    return (
      <div className="w-full h-64 bg-black border-4 border-accent">
        <img
          className="object-cover w-full h-full"
          src={images[currentImageIndex].default}
          alt="Slideshow"
        />
      </div>
    );
  };

  return (
    <>
      <section
        id="bts"
        className="bg-cover w-full flex flex-col gap-6 bg-primary text-accent text-lg font-medium p-4"
      >
        <h1 className="text-2xl font-black italic">
          Behind
          <br />
          the scenes
        </h1>
        <ImageSlider />
      </section>
    </>
  );
}
