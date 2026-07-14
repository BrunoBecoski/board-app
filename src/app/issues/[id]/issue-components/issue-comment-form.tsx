"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Loader2Icon, MessageCirclePlusIcon } from "lucide-react"

import { Input } from "@/components/input"

const createCommentSchema = z.object({
  text: z.string().min(1, "Comentário não pode estar vazio"),
})

type CreateCommentSchema = z.infer<typeof createCommentSchema>

interface IssueCommentFormProps {
  isAuthenticated: boolean
  onCreateComment: (text: string) => Promise<void>
}

export function IssueCommentForm({
  isAuthenticated,
  onCreateComment,
}: IssueCommentFormProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<CreateCommentSchema>({
    resolver: zodResolver(createCommentSchema),
  })

  async function handleCreateComment(data: CreateCommentSchema) {
    await onCreateComment(data.text)

    reset()
  }

  return (
    <form
      onSubmit={handleSubmit(handleCreateComment)}
      className="relative w-full"
    >
      <Input
        className="bg-navy-900 h-11 pr-24 w-full"
        placeholder={
          !isAuthenticated
            ? "Faça login para comentar..."
            : "Deixe um comentário..."
        }
        disabled={!isAuthenticated || isSubmitting}
        {...register("text")}
      />
      {errors.text && (
        <span className="text-xs text-red-400 mt-1">{errors.text.message}</span>
      )}
      <button
        type="submit"
        className="flex items-center gap-2 text-indigo-400 absolute right-3 top-1/2 -translate-y-1/2 text-xs hover:text-indigo-300 cursor-pointer disabled:opacity-50"
        disabled={!isAuthenticated || isSubmitting}
      >
        Publicar
        {isSubmitting ? (
          <Loader2Icon className="size-3 animate-spin" />
        ) : (
          <MessageCirclePlusIcon className="size-3" />
        )}
      </button>
    </form>
  )
}
