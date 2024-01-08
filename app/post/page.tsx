"use client";

import { useEffect, useState } from "react";
import * as blogData from "lib/blog-data"

//components
import BlogHeader from "@/components/blog-header";
import BlogLayout from "@/components/blog-layout";
import BlogContainer from "@/components/blog-container";
import HeroPost from "@/components/blog-hero-post";
import { BlogPostType, getBlogPost, getAllBlogPosts } from "@/sanity/lib/queries";

import Image from "next/image";
import Link from "next/link";

const Blogs: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [dataPosts, setDataPosts] = useState<BlogPostType[]>([]);

  const [heroPost, ...morePosts] = dataPosts;

  console.log("Get blog posts:", getAllBlogPosts())

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllBlogPosts();
      setDataPosts(data);
      setLoading(false);
    }
    fetchData();
  }, []);

  console.log("Blog data:", dataPosts)


  if (loading) {
    return <div>Loading...</div>
  }
  return (
    <>
      <BlogLayout>
          {/* <BlogHeader title={blogData.title} description={blogData.description} level={1} />
        {heroPost && (
          <HeroPost
            title={heroPost.title}
            thumbnail={heroPost.thumbnail}
            publishedAt={heroPost.publishedAt}
            author={heroPost.author}
            slug={heroPost.slug}
          />
        )} */}
        <div className="max-w-4xl mx-auto p-6">
          <h1 className="text-4xl font-semibold mb-4">Blogs</h1>
          {morePosts.map((post) => (
            <div key={post.slug} className="mb-8">
              <Link href={`/post/${post.slug}`} className="text-2xl font-bold">
                {post.title}
              </Link>
              <div>
                Published on {new Date(post.publishedAt).toDateString()}
              </div>
              {post.thumbnail && post.thumbnail.asset && (
                <div className="mt-4 relative">
                  <Image
                    src={post.thumbnail.asset.url}
                    alt={post.thumbnail.alt || "Blog Post Thumbnail"}
                    layout="responsive"
                    width={700}
                    height={400}
                    className="rounded-md"
                  />
                </div>
              )}
              {/* <p className="mt-2">{post}</p> */}
            </div>
          ))}
        </div>

      </BlogLayout>
    </>

  )
};

export default Blogs;



