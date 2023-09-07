"use client"

import { useState } from 'react';
import Image from 'next/image';
import { Lightbox } from 'react-modal-image';

interface PhotoProps {
  imgSrc: string;
  alt?: string;
  linkHref: string;
  title: string;
  onOpen: () => void;
}

const Photo: React.FC<PhotoProps> = ({ imgSrc, title, linkHref, alt = "", onOpen }) => {
  return (
    <div className="group relative w-full pb-[100%] aspect-w-1 aspect-h-1 overflow-hidden hover:opacity-70 transition-opacity duration-300 z-0">
      <div className="absolute inset-0" onClick={onOpen}>
        <Image
          src={imgSrc}
          alt={alt}
          width={1440}
          height={1440}
          className="object-cover w-full h-full z-0"
          loading="eager"
        />
      </div>
      <div className="absolute bottom-0 inset-x-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white p-2">
        {title}
      </div>
    </div>
  );
}

export default Photo;

