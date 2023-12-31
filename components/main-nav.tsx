import Link from "next/link"

import { siteConfig } from "@/config/site"
import { Icons } from "@/components/icons"

export function MainNav() {
  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="flex items-center space-x-2">
        <div className="h-12 w-12">
          <Icons.logo />
          </div>
        <span className="inline-block text-lg">
          {siteConfig.name}
        </span>
      </Link>
    </div>
  )
}
