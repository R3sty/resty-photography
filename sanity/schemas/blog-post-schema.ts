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
      of: [
        {
          type: "block",
          // Optional: This allows you to set some options for the rich text editor
          styles: [],
          marks: {
            decorators: [{ title: 'Strong', value: 'strong' }, { title: 'Emphasis', value: 'em' }],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'URL',
                fields: [
                  {
                    title: 'URL',
                    name: 'href',
                    type: 'url'
                  }
                ]
              }
            ]
          }
        },
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            {
              name: "alt",
              title: "Alt",
              type: "string",
              description: "Describe the image for those who can't see it"
            }
          ]
        }
      ]
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
