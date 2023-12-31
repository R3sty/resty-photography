import { cn } from "@/lib/utils";
import { urlForImage } from "@/sanity/lib/image";
import Image from 'next/image';
import Link from 'next/link';

type CoverImageProps = {
  title: string;
  slug?: string;
  image: any;
  priority?: boolean;
};

const CoverImage: React.FC<CoverImageProps> = ({ title, slug, image: source, priority }) => {
  const image = source?.asset?.url ? (
    <div
      className={cn('shadow-small', {
        'transition-shadow duration-200 hover:shadow-medium': slug,
      })}
    >
      <Image
        className="h-auto w-full"
        width={2000}
        height={1000}
        alt={`Cover Image for ${title}`}
        src={urlForImage(source).height(1000).width(2000).url()}
        sizes="100vw"
        priority={priority}
      />
    </div>
  ) : (
    <div style={{ paddingTop: '50%', backgroundColor: '#ddd' }} />
  );

  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link href={`/post/${slug}`} aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  );
};

export default CoverImage;
