"use client"

import { MoveRightIcon } from "lucide-react"

interface GoButtonProps {
  issueId: string
}

export function GoButton({ issueId }: GoButtonProps) {
  return (
    <a
      className="flex items-center gap-2 text-navy-200 hover:text-navy-100 cursor-pointer"
      href={`/issues/${issueId}`}
    >
      <span className="text-xs">Ir para a Issue</span>
      <MoveRightIcon className="size-4" />
    </a>
  )
}
