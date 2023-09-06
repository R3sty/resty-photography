import { client } from "@/sanity/lib/client"
import { groq } from "next-sanity"

import { SanityProduct } from "@/config/inventory"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { ProductFilters } from "@/components/product-filters"
import { ProductGrid } from "@/components/product-grid"
import { ProductSort } from "@/components/product-sort"
import { seedSanityData } from "@/lib/seed"

interface Props { }

export default function Page() {
  return (
      <div>
        <main className="mx-auto max-w-6xl px-6">
          <section>
            <div>Home page works</div>
          </section>
        </main>
      </div>
  )
}
