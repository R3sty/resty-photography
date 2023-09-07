import Image from 'next/image';

interface PhotoProps {
  imgSrc: string;
  alt?: string;
  linkHref: string;
  title: string;
}

const Photo: React.FC<PhotoProps> = ({ imgSrc, title, linkHref, alt = "" }) => {
  return (
    <div className="group relative w-full pb-[100%] aspect-w-1 aspect-h-1 overflow-hidden hover:opacity-70 transition-opacity duration-300">
      <div className="absolute inset-0">
        <Image
          src={imgSrc}
          alt={alt}
          width={1440}
          height={1440}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="absolute bottom-0 inset-x-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white p-2">
        {title}
      </div>
    </div>
  );
}

export default Photo;
