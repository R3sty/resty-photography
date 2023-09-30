"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";

type BlogPostType = {
  title: string;
  slug: string;
  publishedAt: string;
  excerpt: string;
};

const getBlogPosts = async (): Promise<BlogPostType[]> => {
  return client.fetch(
    groq`*[_type == "blogPost"]{
      title,
      "slug": slug.current,
      publishedAt,
      excerpt
    }`
  );
}

const Blogs: React.FC = () => {
  const [posts, setPosts] = useState<BlogPostType[]>([]);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      const data = await getBlogPosts();
      setPosts(data);
    };

    fetchBlogPosts();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-semibold mb-4">Blogs</h1>
      {posts.map((post) => (
        <div key={post.slug} className="mb-8">
          <Link href={`/blog/${post.slug}`}
            className="text-2xl font-bold">{post.title}
          </Link>
          <div className="text-gray-600">
            Published on {new Date(post.publishedAt).toDateString()}
          </div>
          <p className="mt-2">{post.excerpt}</p>
        </div>
      ))}
    </div>
  );
}

export default Blogs;
