import { ArchiveIcon, MessageCircleIcon, ThumbsUpIcon } from "lucide-react"

import { Section } from "@/components/sections"
import { Card } from "@/components/card"

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
            <Card.Root href="/versao-mobile">
              <Card.Header>
                <Card.Number>DES-067</Card.Number>
                <Card.Title>Implementar versão mobile</Card.Title>
              </Card.Header>

              <Card.Footer>
                <button
                  type="button"
                  className="text-navy-100 flex items-center gap-2 rounded-lg px-2.5 py-1 bg-navy-600 cursor-pointer hover:bg-navy-400 transition-colors"
                >
                  <ThumbsUpIcon className="size-3" />
                  <span className="text-sm">53</span>
                </button>

                <button
                  type="button"
                  className="text-navy-100 flex items-center gap-2 rounded-lg px-2.5 py-1 bg-navy-600 cursor-pointer hover:bg-navy-400 transition-colors"
                >
                  <MessageCircleIcon className="size-3" />
                  <span className="text-sm">23</span>
                </button>
              </Card.Footer>
            </Card.Root>

            <Card.Root href="/cartao-de-credito">
              <Card.Header>
                <Card.Number>ECO-001</Card.Number>
                <Card.Title>Implementar cartão de crédito</Card.Title>
              </Card.Header>

              <Card.Footer>
                <button
                  type="button"
                  className="text-navy-100 flex items-center gap-2 rounded-lg px-2.5 py-1 bg-navy-600 cursor-pointer hover:bg-navy-400 transition-colors"
                >
                  <ThumbsUpIcon className="size-3" />
                  <span className="text-sm">12</span>
                </button>

                <button
                  type="button"
                  className="text-navy-100 flex items-center gap-2 rounded-lg px-2.5 py-1 bg-navy-600 cursor-pointer hover:bg-navy-400 transition-colors"
                >
                  <MessageCircleIcon className="size-3" />
                  <span className="text-sm">4</span>
                </button>
              </Card.Footer>
            </Card.Root>
          </Section.Content>
        </Section.Root>
      </main>
    </div>
  )
}
