import { Skeleton } from "@/components/skeleton"

export default function BoardLoading() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 flex-1 items-stretch">
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
    </div>
  )
}
