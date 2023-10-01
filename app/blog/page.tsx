"use client";

import * as blogData from "lib/blog-data"
import { client } from "@/sanity/lib/client";
import { GetStaticProps } from 'next'
//components
import BlogHeader from "@/components/blog-header";
import BlogLayout from "@/components/blog-layout";
import BlogContainer from "@/components/blog-container";
import HeroPost from "@/components/blog-hero-post";
import { BlogPostType, getBlogPost } from "@/sanity/lib/queries";

export type PageProps = {
  preview?: boolean
  loading?: boolean
  posts: BlogPostType[]
  //settings: Settings
}

const Blogs: React.FC<PageProps> = (props) => {
  const { preview, loading, posts } = props
  const [heroPost, ...morePosts] = posts || []

  console.log("Posts--->", posts);
  console.log("Hero Post--->", heroPost);

  return (
    <>
      <BlogLayout>
        <BlogContainer>
          <BlogHeader title={blogData.title} description={blogData.description} level={1} />
        </BlogContainer>
        {heroPost && (
        <HeroPost
          title={heroPost.title}
          thumbnail={heroPost.thumbnail}
          publishedAt={heroPost.publishedAt}
          author={heroPost.author}
          slug={heroPost.slug}
        />
      )}
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


