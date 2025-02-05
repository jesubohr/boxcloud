import type { foldersTable, filesTable } from "~/server/db/schema"

export type BoxFolder = typeof foldersTable.$inferSelect
export type BoxFile = typeof filesTable.$inferSelect

export type Folder = {
  id: string
  name: string
  parent: string | null
}

export type File = {
  id: string
  name: string
  size: string
  url: string
  type: string
  parent: string
}
