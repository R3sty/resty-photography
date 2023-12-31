"use client";

import React, { useState } from 'react';
import Photo from "@/components/photo";
import PhotoCarousel from "@/components/photo-carousel";

type PhotoProps = {
  imgSrc: string;
  alt?: string;
  linkHref: string;
  title: string;
};

type PhotoGridProps = {
  photos: PhotoProps[];
};

const PhotoGrid: React.FC<PhotoGridProps> = ({ photos }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const isMobile = () => {
    return window.innerWidth < 768;
  };

  const openLightbox = (index: number) => {
    if (isMobile()) {
      return;
    }
    setCurrentSlide(index);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };

  return (
    <div className="max-w-full px-2 md:px-4 lg:px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {photos.map((photo, index) => (
          <Photo
            key={index}
            imgSrc={photo.imgSrc}
            alt={photo.alt}
            title={photo.title}
            onOpen={() => openLightbox(index)}
          />
        ))}
      </div>
      {isOpen && (
        <PhotoCarousel
          photos={photos}
          initialSlideIndex={currentSlide}
          onClose={closeLightbox}
        />
      )}
    </div>
  );
};

export default PhotoGrid;
