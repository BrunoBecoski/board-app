import { Skeleton } from "@/components/skeleton"

export default function BoardLoading() {
  return (
    <div className="grid grid-cols-[repeat(4,minmax(320px,1fr))] gap-5 flex-1 items-stretch">
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
    </div>
  )
}
