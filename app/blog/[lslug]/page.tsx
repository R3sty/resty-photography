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



type Props = {
  params: {
    lslug: string;
  };
};

const BlogPost: React.FC<Props> = ({ params }) => {
  const [blogPost, setBlogPost] = useState<BlogPostType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchBlogPost() {
      try {
        const data = await getBlogPost(params.lslug);
        setBlogPost(data);
      } catch (err) {
        setError("Failed to fetch blog post.");
      } finally {
        setLoading(false);
      }
    }
    fetchBlogPost();
  }, [params.lslug]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!blogPost) return <div>No blog post found.</div>;

  return (
    <div>
      <h1>{blogPost.title}</h1>
      <p>Published at: {blogPost.publishedAt}</p>
      <p>By: {blogPost.author}</p>
      <Image src={blogPost.thumbnail.asset.url} alt={blogPost.thumbnail.alt} width={500} height={300} />
      <PortableText content={blogPost.content} />
    </div>
  );
}

export default BlogPost;
