import { formatDistanceToNow } from "date-fns"
import { ptBR } from "date-fns/locale"

import { listIssueComments } from "@/http/list-issue-comments"
import { Comment } from "@/components/comment"

interface IssueCommentsLitsProps {
  issueId: string
}

export async function IssueCommentsList({ issueId }: IssueCommentsLitsProps) {
  const { comments } = await listIssueComments({ issueId })

  if (comments.length === 0) {
    return (
      <p className="text-navy-400 text-sm text-center py-2">
        Nenhum comentário ainda
      </p>
    )
  }

  return (
    <div className="space-y-3">
      {comments.map((comment) => (
        <Comment.Root key={comment.id}>
          <Comment.Avatar
            src={comment.author.avatar}
            alt={comment.author.name}
          />

          <Comment.Content>
            <Comment.Header>
              <Comment.Author>{comment.author.name}</Comment.Author>
              <Comment.Time>
                {formatDistanceToNow(comment.createdAt, {
                  addSuffix: true,
                  locale: ptBR,
                })}
              </Comment.Time>
            </Comment.Header>

            <Comment.Text>{comment.text}</Comment.Text>
          </Comment.Content>
        </Comment.Root>
      ))}
    </div>
  )
}
