import { product } from "@/sanity/schemas/product-schema"
import { project } from "@/sanity/schemas/project-schema"
import { type SchemaTypeDefinition } from "sanity"


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, project],
}
