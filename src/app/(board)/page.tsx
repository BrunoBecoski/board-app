import { Metadata } from "next"

import { listIssues } from "@/http/list-issues"
import { BoardContent } from "./board-components/border-content"

interface BoardProps {
  searchParams: Promise<{ search?: string }>
}

export const metadata: Metadata = {
  title: "Board",
}

export default async function Board({ searchParams }: BoardProps) {
  const { search } = await searchParams

  const issues = await listIssues({ search })

  return <BoardContent issues={issues} />
}
