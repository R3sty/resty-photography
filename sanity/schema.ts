import { product } from "@/sanity/schemas/product-schema"
import { project } from "@/sanity/schemas/project-schema"
import { blogPost } from "@/sanity/schemas/blog-post-schema"
import { category } from "@/sanity/schemas/blog-category"
import { type SchemaTypeDefinition } from "sanity"


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, project, blogPost, category],
}
