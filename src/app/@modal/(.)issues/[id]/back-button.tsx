"use client"

import { useRouter } from "next/navigation"
import { MoveLeftIcon } from "lucide-react"

export function BackButton() {
  const router = useRouter()

  return (
    <button
      type="button"
      onClick={() => router.back()}
      className="flex items-center gap-2 text-navy-200 hover:text-navy-100 cursor-pointer"
    >
      <MoveLeftIcon className="size-4" />
      <span className="text-xs">Voltar ao Board</span>
    </button>
  )
}
