"use client";

import React, { useState } from 'react';
import Photo from "@/components/photo";
import { Lightbox } from "react-modal-image";

interface PhotoProps {
  imgSrc: string;
  alt?: string;
  linkHref: string;
  title: string;
}

interface PhotoGridProps {
  photos: PhotoProps[];
}

const PhotoGrid: React.FC<PhotoGridProps> = ({ photos }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");
  const [currentAlt, setCurrentAlt] = useState("");

  const openLightbox = (imgSrc: string, alt?: string) => {
    setCurrentImage(imgSrc);
    setCurrentAlt(alt || "");
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
            linkHref={photo.linkHref}
            title={photo.title}
            onOpen={() => openLightbox(photo.imgSrc, photo.alt)}
          />
        ))}
      </div>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">

          <Lightbox
            //@ts-ignore
            medium={currentImage}
            large={currentImage}
            alt={currentAlt}
            hideDownload={true}
            onClose={closeLightbox}
          />
        </div>
      )}
    </div>
  );
}

export default PhotoGrid;
