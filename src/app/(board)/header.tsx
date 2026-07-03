"use client"

import type { ChangeEvent } from "react"
import { debounce, parseAsString, useQueryState } from "nuqs"
import { Loader2Icon, LogInIcon, SearchIcon } from "lucide-react"

import { Input } from "@/components/input"
import { authClient } from "@/lib/auth-client"

export function Header() {
  const { data: session, isPending } = authClient.useSession()

  const [search, setSearch] = useQueryState(
    "busca",
    parseAsString.withDefault(""),
  )

  function handleSearchUpdate(event: ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value, {
      limitUrlUpdates: event.target.value !== "" ? debounce(500) : undefined,
    })
  }

  async function handleSignIn() {
    await authClient.signIn.social({ provider: "github", callbackURL: "/" })
  }

  async function handleSignOut() {
    await authClient.signOut()
  }

  return (
    <div className="max-w-225 mx-auto w-full justify-between flex-col items-end flex sm:items-center sm:flex-row gap-4 sm:gap-10">
      <div className="space-y-1">
        <h1>Rota de Recurso da Plataforma</h1>
        <p className="text-sm text-navy-100">
          Siga o progresso do desenvolvimento de recurso da nossa plataforma
        </p>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative">
          <SearchIcon className="absolute size-4 text-navy-200 left-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <Input
            placeholder="Procurar por recursos..."
            className="w-67.5 pl-8"
            value={search}
            onChange={handleSearchUpdate}
          />
        </div>

        {isPending ? (
          <div className="size-8 rounded-full cursor-pointer bg-navy-700 border border-navy-500 flex items-center justify-center">
            <Loader2Icon className="size-3.5 text-navy-200 animate-spin" />
          </div>
        ) : session?.user ? (
          <button
            type="button"
            onClick={handleSignOut}
            className="size-8 rounded-full cursor-pointer overflow-hidden"
          >
            <img
              src={session.user.image ?? ""}
              alt={session.user.name}
              className="size-8 rounded-full"
            />
          </button>
        ) : (
          <button
            type="button"
            onClick={handleSignIn}
            className="size-8 rounded-full cursor-pointer bg-navy-700 border border-navy-500 flex items-center justify-center hover:bg-navy-600 transition-colors duration-150"
          >
            <LogInIcon className="size-3.5 text-navy-200" />
          </button>
        )}
      </div>
    </div>
  )
}
