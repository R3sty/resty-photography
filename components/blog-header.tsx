import PortableText from "react-portable-text";
import Link from 'next/link';

type BlogHeaderProps = {
  title: string;
  description?: any[];
  level: 1 | 2;
};

const BlogHeader: React.FC<BlogHeaderProps> = ({ title, description, level }) => {
  switch (level) {
    case 1:
      return (
        <header className="mb-10 mt-16 flex flex-col items-center md:mb-12 md:flex-row md:justify-between">
          <h1 className="text-6xl font-bold leading-tight tracking-tighter md:pr-8 md:text-8xl">
            {title}
          </h1>
          <h4 className="mt-5 text-center text-lg md:pl-8 md:text-left">
            <PortableText content={description} />
          </h4>
        </header>
      );

    case 2:
      return (
        <header>
          <h2 className="mb-20 mt-8 text-2xl font-bold leading-tight tracking-tight md:text-4xl md:tracking-tighter">
            <Link href="/">
              <a className="hover:underline">{title}</a>
            </Link>
          </h2>
        </header>
      );

    default:
      throw new Error(
        `Invalid level: ${JSON.stringify(level) || typeof level}, only 1 or 2 are allowed`,
      );
  }
};

export default BlogHeader;
