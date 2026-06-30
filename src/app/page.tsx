import { ArchiveIcon } from "lucide-react"

import { Section } from "@/components/sections"

export default function Home() {
  return (
    <div className="max-w-[1620px] w-full mx-auto p-10 flex flex-col gap-8 h-dvh">
      <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 flex-1 items-stretch">
        <Section.Root>
          <Section.Header>
            <Section.Title>
              <ArchiveIcon className="size-3" />
              Backlog
            </Section.Title>

            <Section.IssueCount>67</Section.IssueCount>
          </Section.Header>

          <Section.Content>
            <div>card 1</div>
            <div>card 2</div>
            <div>card 3</div>
          </Section.Content>
        </Section.Root>
      </main>
    </div>
  )
}
