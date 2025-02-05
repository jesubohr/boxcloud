import { db } from "~/server/db"
import { folders as foldersSchema, files as filesSchema } from "~/server/db/schema"
import BoxCloudContents from "./boxcloud-contents"

export default async function BoxCloud() {
  const folders = await db.select().from(foldersSchema)
  const files = await db.select().from(filesSchema)

  return (
    <BoxCloudContents folders={folders} files={files} />
  )
}
