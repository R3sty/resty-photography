"use client";

import { useState } from 'react';
import PhotoGrid from "@/components/photo-grid";
import CarouselComponent from "@/components/photo-carousel";

const photosData = [
  { imgSrc: "https://storage.googleapis.com/photo-portfolio/jared-verdi-PNKwdJ8WetM-unsplash.jpg", title: "Title 1", linkHref: "/link1" },
  { imgSrc: "https://storage.googleapis.com/photo-portfolio/mohammad-alizade-62t_kKa2YlA-unsplash.jpg", title: "Title 2", linkHref: "/link2" },
  { imgSrc: "https://storage.googleapis.com/photo-portfolio/neom-AGZgrNeq7Kg-unsplash.jpg", title: "Title 3", linkHref: "/link3" },
  { imgSrc: "https://storage.googleapis.com/photo-portfolio/milo-weiler-4keNyNXEoqI-unsplash.jpg", title: "Title 3", linkHref: "/link3" },
  { imgSrc: "https://storage.googleapis.com/photo-portfolio/lustig-photography-1vPblXnxhds-unsplash.jpg", title: "Title 3", linkHref: "/link3" },
  { imgSrc: "https://storage.googleapis.com/photo-portfolio/bailey-zindel-NRQV-hBF10M-unsplash.jpg", title: "Title 3", linkHref: "/link3" },
];

const Portraits = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentSlide(index);
    setIsOpen(true);
    console.log('openLightbox called', { index, isOpen: true });
  };

  const closeLightbox = () => {
    setIsOpen(false);
    console.log('closeLightbox called', { isOpen: false });
  };

  return (
    <div>
    <CarouselComponent
          photos={photosData}
          initialSlideIndex={currentSlide}
          onClose={closeLightbox}
      />
      </div>
    // <PhotoGrid photos={photosData} />
  );
}

export default Portraits;



