export const category = {
  name: "category",
  title: "Categories",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Category Name",
      type: "string"
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name" }
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      description: "Brief description of the category (optional)."
    }
  ]
}
