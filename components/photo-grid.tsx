import React from 'react';
import Photo from "@/components/photo";

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
          />
        ))}
      </div>
    </div>
  );
}

export default PhotoGrid;
