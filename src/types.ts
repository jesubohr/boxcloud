import type { folders, files } from "~/server/db/schema"

export type BoxFolder = typeof folders.$inferSelect
export type BoxFile = typeof files.$inferSelect

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
