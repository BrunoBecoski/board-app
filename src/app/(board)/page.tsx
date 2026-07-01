import { ArchiveIcon, MessageCircleIcon, ThumbsUpIcon } from "lucide-react"

import { Section } from "@/components/sections"
import { Card } from "@/components/card"
import { Button } from "@/components/button"

export default function Home() {
  return (
    <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 flex-1 items-stretch">
      <Section.Root>
        <Section.Header>
          <Section.Title>
            <ArchiveIcon className="size-3" />
            Backlog (pendências)
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
              <Button>
                <ThumbsUpIcon className="size-3" />
                <span className="text-sm">53</span>
              </Button>

              <Button>
                <MessageCircleIcon className="size-3" />
                <span className="text-sm">23</span>
              </Button>
            </Card.Footer>
          </Card.Root>

          <Card.Root href="/cartao-de-credito">
            <Card.Header>
              <Card.Number>ECO-001</Card.Number>
              <Card.Title>Implementar cartão de crédito</Card.Title>
            </Card.Header>

            <Card.Footer>
              <Button>
                <ThumbsUpIcon className="size-3" />
                <span className="text-sm">12</span>
              </Button>

              <Button>
                <MessageCircleIcon className="size-3" />
                <span className="text-sm">4</span>
              </Button>
            </Card.Footer>
          </Card.Root>
        </Section.Content>
      </Section.Root>
    </main>
  )
}
