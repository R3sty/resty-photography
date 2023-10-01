import { groq } from 'next-sanity';
import { client } from "@/sanity/lib/client";
import { PortableTextBlock } from "sanity";

export type BlogPostType = {
  title: string;
  publishedAt: string;
  author: string;
  slug: string;
  thumbnail: {
    asset: {
      url: string;
    };
    alt: string;
  };
  content: PortableTextBlock[];
};

export const getBlogPost = async (slug: string): Promise<BlogPostType> => {
  return client.fetch(
    groq`*[_type == "blogPost" && slug.current == $slug][0]{
      title,
      publishedAt,
      author,
      "thumbnail": {
        "asset": {
          "url": thumbnail.asset->url
        },
        "alt": thumbnail.alt
      },
      "slug": slug.current,
      "content": content[]{
        ...,
        "asset": asset->{
          "url": url
        }
      }
    }`,
    { slug }
  );
};
