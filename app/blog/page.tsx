"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from "next/image";
import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import * as blogData from "lib/blog-data"

//components
import BlogHeader from "@/components/blog-header";
import BlogLayout from "@/components/blog-layout";
import BlogContainer from "@/components/blog-container";

type BlogPostType = {
  title: string;
  slug: string;
  publishedAt: string;
  excerpt: string;
  thumbnail: {
    asset: string;
    alt?: string;
  };
};

const getBlogPosts = async (): Promise<BlogPostType[]> => {
  return client.fetch(
    groq`*[_type == "blogPost"]{
      title,
      "slug": slug.current,
      publishedAt,
      excerpt,
      "thumbnail": {
        "asset": thumbnail.asset->url,
        "alt": thumbnail.alt
      }
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
    <>
      <BlogLayout>
        <BlogContainer>
      <BlogHeader title={blogData.title} description={blogData.description} level={1} />
      </BlogContainer>
      </BlogLayout>
    </>
    //       <div className="max-w-4xl mx-auto p-6">
    //   <h1 className="text-4xl font-semibold mb-4">Blogs</h1>
    //   {posts.map((post) => (
    //     <div key={post.slug} className="mb-8">
    //       <Link href={`/blog/${post.slug}`} className="text-2xl font-bold">
    //         {post.title}
    //       </Link>
    //       <div className="text-gray-600">
    //         Published on {new Date(post.publishedAt).toDateString()}
    //       </div>
    //       {post.thumbnail && post.thumbnail.asset && (
    //         <div className="mt-4 relative">
    //           <Image
    //             src={post.thumbnail.asset}
    //             alt={post.thumbnail.alt || "Blog Post Thumbnail"}
    //             layout="responsive"
    //             width={700}
    //             height={400}
    //             className="rounded-md"
    //           />
    //         </div>
    //       )}
    //       <p className="mt-2">{post.excerpt}</p>
    //     </div>
    //   ))}
    // </div>
  );
}

export default Blogs;
