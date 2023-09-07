import React from 'react';
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface BannerProps {
  imgSrc: string;
  title: string;
  linkHref: string;
  alt?: string;
}

const Banner: React.FC<BannerProps> = ({ imgSrc, title, linkHref, alt }) => {
  return (
    <Link href={linkHref}>
      <div className="relative overflow-hidden md:h-[75vh] h-[25vh]">
        <Image
          src={imgSrc}
          alt={title}
          quality={100}
          width={1080}
          height={720}
          className="absolute inset-0 object-cover w-full h-full"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-2 rounded-md font-bold text-center text-white text-sm md:text-lg">
          {title}
        </div>
      </div>
    </Link>
  );
}

export default Banner;



