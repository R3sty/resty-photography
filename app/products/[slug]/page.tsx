import { client } from "@/sanity/lib/client"
import { groq } from "next-sanity"
import { seedSanityData } from "@/lib/seed"
import { SanityProduct } from "@/config/inventory"
import { ProductGallery } from "@/components/product-gallery"
import { ProductInfo } from "@/components/product-info"

interface Props {}

export default async function Page() {
  await seedSanityData()
  return (
    <main className="mx-auto max-w-5xl sm:px-6 sm:pt-16 lg:px-8">
      <div className="mx-auto max-w-2xl lg:max-w-none">
        {/* Product */}
        <div className="pb-20 lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-12">
          {/* Product gallery */}
          {/* Product info */}
        </div>
      </div>
    </main>
  )
}
