"use client";

import { useEffect, useState } from "react";
import * as blogData from "lib/blog-data"

//components
import BlogLayout from "@/components/blog-layout";
import BlogContainer from "@/components/blog-container";
import { BlogPostType, getBlogPost, getAllBlogPosts } from "@/sanity/lib/queries";

import Image from "next/image";
import Link from "next/link";

const Blogs: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [dataPosts, setDataPosts] = useState<BlogPostType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllBlogPosts();
      setDataPosts(data);
      setLoading(false);
    }
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>
  }
  return (
    <>
      <BlogLayout>
        <div className="max-w-4xl mx-auto p-6">
          <h1 className="text-4xl font-semibold mb-4">Blogs</h1>
          {dataPosts.map((post) => (
            <div key={post.slug} className="mb-8">
              <Link href={`/post/${post.slug}`} className="text-2xl font-bold">
                {post.title}
              </Link>
              <div>
                Published on {new Date(post.publishedAt).toDateString()}
              </div>
              {post.thumbnail && post.thumbnail.asset && (
                <div className="mt-4 relative">
                  <div className="w-[300px] h-auto">
                  <Image
                    src={post.thumbnail.asset.url}
                    alt={post.thumbnail.alt || "Blog Post Thumbnail"}
                    layout="responsive"
                    width={300}
                    height={200}
                    className="rounded-md"
                    />
                    </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </BlogLayout>
    </>

  )
};

export default Blogs;



