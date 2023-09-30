"use client";

import { groq } from 'next-sanity';
import { useState, useEffect } from "react";
import PortableText from "react-portable-text";
import Image from 'next/image';
import { client } from "@/sanity/lib/client";
import { PortableTextBlock } from "sanity";

type BlogPostType = {
  title: string;
  publishedAt: string;
  author: string;
  thumbnail: {
    asset: {
      url: string;
    };
    alt: string;
  };
  content: PortableTextBlock[];
};

const getBlogPost = async (slug: string): Promise<BlogPostType> => {
  return client.fetch(
    groq`*[_type == "blogPost" && slug.current == $slug][0]{
      title,
      publishedAt,
      author,
      "thumbnail": {
        "asset": thumbnail.asset->url,
        "alt": thumbnail.alt
      },
      content
    }`,
    { slug }
  );
};

type Props = {
  params: { slug: string }
};

const BlogPost: React.FC<Props> = ({ params }: Props) => {
  const [blogPost, setBlogPost] = useState<BlogPostType | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const post = await getBlogPost(params.slug);
        setBlogPost(post);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching the blog post:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [params.slug]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!blogPost) {
    return <div>Error fetching the blog post or post not found.</div>;
  }
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-semibold mb-4">{blogPost.title}</h1>
      <div className="mb-4">
        <span className="text-gray-600">Published on {new Date(blogPost.publishedAt).toDateString()}</span>
        <span className="text-gray-600 mx-2">|</span>
        <span className="text-gray-600">By {blogPost.author}</span>
      </div>
      <div className="relative w-full h-[300px] mb-6 rounded-md shadow-md overflow-hidden">
        <Image
          src={blogPost.thumbnail.asset.url}
          alt={blogPost.thumbnail.alt}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <PortableText content={blogPost.content} className="prose"></PortableText>
    </div>
  );
};

export default BlogPost;
