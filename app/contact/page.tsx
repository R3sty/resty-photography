import { client } from "@/sanity/lib/client"
import { groq } from "next-sanity"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"


interface Props {}

export default function Contact() {
  return (
    <div>
      <h1>Contact page works!</h1>
    </div>
  )
}
