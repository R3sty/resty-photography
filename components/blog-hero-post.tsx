import AuthorAvatar from "./blog-author-avatar";
import CoverImage from "./blog-cover-image";
import PostDate from "./blog-post-date";
import { BlogPostType } from "@/sanity/lib/queries";
import Link from 'next/link';

type HeroPostProps = Pick<
  BlogPostType,
  'title' | 'thumbnail' | 'publishedAt' | 'author' | 'slug'
>;

const HeroPost: React.FC<HeroPostProps> = ({
  title,
  thumbnail,
  publishedAt,
  author,
  slug,
}) => (
  <section>
    <div className="mb-8 md:mb-16">
      <CoverImage slug={slug} title={title} image={thumbnail} priority />
    </div>
    <div className="mb-20 md:mb-28 md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 border">
      <div>
        <h3 className="mb-4 text-4xl leading-tight lg:text-6xl">
          <Link href={`/post/${slug}`} className="hover:underline">
              {title || 'Untitled'}
          </Link>
        </h3>
        <div className="mb-4 text-lg md:mb-0">
          <PostDate dateString={publishedAt} />
        </div>
      </div>
      {/* <div>
        {author && (
          <AuthorAvatar/>
        )}
      </div> */}
    </div>
  </section>
);

export default HeroPost;
