import { product } from "@/app/sanity/schemas/product-schema"
import { project } from "@/app/sanity/schemas/project-schema"
import { blogPost } from "@/app/sanity/schemas/blog-post-schema"
import { category } from "@/app/sanity/schemas/blog-category"
import { type SchemaTypeDefinition } from "sanity"


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, project, blogPost, category],
}
