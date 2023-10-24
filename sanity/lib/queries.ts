import { GetStaticProps } from 'next';
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


export const getAllBlogPosts = async ():
  Promise<BlogPostType[]> => {
  try
  {
    const data = await client.fetch(
      groq`*[_type == "blogPost"]{
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
    }`
    );
    console.log("Data from Sanity:", data);
    return data;
  } catch (error)
  {
    console.error("Error fetching data from Sanity:", error);
    return [];
  }

};

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllBlogPosts();
  console.log("Posts from getStaticProps:", posts);
  return {
    props: { posts }
  };
};
