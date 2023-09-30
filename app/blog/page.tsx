"use client"

import { useEffect, useState } from "react";
import { NextSeo } from 'next-seo';
import { client } from "@/sanity/lib/client";
import ReactMarkdown from 'react-markdown';

type BlogPostProps = {
  slug: string | undefined;
};

const BlogPost: React.FC<BlogPostProps> = ({ slug }) => {
  const [post, setPost] = useState(null);

  useEffect(() => {
    async function fetchPostData() {
      const data = await getPostData(slug);
      setPost(data);
    }

    fetchPostData();
  }, [slug]);

  if (!post) return <div>Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <NextSeo
        title={post.title}
        description={post.excerpt}
        openGraph={{
          title: post.title,
          description: post.excerpt,
          images: [
            {
              url: post.thumbnail.asset.url,
              alt: post.thumbnail.alt
            }
          ]
        }}
      />
      <h1 className="text-4xl font-semibold mb-4">{post.title}</h1>
      <div className="mb-4">
        <span className="text-gray-600">Published on {new Date(post.publishedAt).toDateString()}</span>
        <span className="text-gray-600 mx-2">|</span>
        <span className="text-gray-600">By {post.author}</span>
      </div>
      <img src={post.thumbnail.asset.url} alt={post.thumbnail.alt} className="w-full h-auto mb-6 rounded-md shadow-md" />
      <ReactMarkdown className="prose">{post.content}</ReactMarkdown>
      <p className="mt-6 text-gray-600">{post.excerpt}</p>
    </div>
  );
}

async function getPostData(slug: string | undefined) {
  return await client.fetch(`*[_type == "blogPost" && slug.current == "${slug}"][0]{
    title,
    publishedAt,
    author,
    "thumbnail": {
      asset->{
        url
      },
      alt
    },
    content,
    excerpt
  }`);
}

export default BlogPost;
