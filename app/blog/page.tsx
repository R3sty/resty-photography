import { client } from "@/sanity/lib/client"
import { groq } from "next-sanity"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"


interface Props {}

export default function Blog() {
  return (
    <div>
      <h1>Blog works!</h1>
    </div>
  )
}
