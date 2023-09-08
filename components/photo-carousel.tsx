"use client";

import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface PhotoProps {
  imgSrc: string;
  alt?: string;
  linkHref?: string;
  title: string;
}

interface PhotoCarouselProps {
  photos: {
    imgSrc: string;
    alt?: string;
    linkHref?: string;
    title: string;
  }[];
  initialSlideIndex: number;
  onClose: () => void;
}

const PhotoCarousel: React.FC<PhotoCarouselProps> = ({ photos, initialSlideIndex = 0, onClose }) => {

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-90" onClick={onClose}>
      <div className="relative w-3/4 h-3/4" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="absolute top-0 right-0 m-4 p-2 text-slate-500 font-bold z-50"
          aria-label="Close"
        >
          X
        </button>
        <Carousel
          showThumbs={false}
          showStatus={false}
          dynamicHeight={false}
          selectedItem={initialSlideIndex}
          infiniteLoop={true}
          showArrows={true}
        >
          {photos.map((photo: PhotoProps, index: number) => (
            <div key={index} className="relative flex items-center justify-center max-h-[720px] w-auto mb-10">
              <Image
                src={photo.imgSrc}
                alt={photo.alt || ""}
                width={1080}
                height={720}
                quality={100}
                />
              <p className="absolute bottom-0 text-white text-sm md:text-lg py-1 px-2">
                {photo.title}
              </p>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default PhotoCarousel;
