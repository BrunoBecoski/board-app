import { Suspense } from "react"

import { UserButton } from "@/components/header/user-button"
import { SearchInput } from "./search-input"

export function Header() {
  return (
    <div className="max-w-225 mx-auto w-full justify-between flex-col items-end flex sm:items-center sm:flex-row gap-4 sm:gap-10">
      <div className="space-y-1">
        <h1>Product Roadmap</h1>
        <p className="text-sm text-navy-100">
          Siga o progresso do desenvolvimento de recurso da nossa plataforma
        </p>
      </div>

      <div className="flex items-center gap-4">
        <Suspense>
          <SearchInput />
        </Suspense>
        <UserButton />
      </div>
    </div>
  )
}
