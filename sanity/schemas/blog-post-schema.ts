export const blogPost = {
  name: "blogPost",
  title: "Blog Posts",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string"
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" }
    },
    {
      name: "thumbnail",
      title: "Thumbnail",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string"
        }
      ]
    },
    {
      name: "publishedAt",
      title: "Published At",
      type: "datetime"
    },
    {
      name: "author",
      title: "Author",
      type: "string",
      //to: [{ type: "author" }]
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }]
    },
    {
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      description: "Short summary of the blog post"
    },
    {
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "category" }]
    },
  ]
}
