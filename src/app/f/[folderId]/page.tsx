import { db } from "~/server/db"
import { eq } from "drizzle-orm"
import { folders as foldersSchema, files as filesSchema } from "~/server/db/schema"
import BoxCloudContents from "~/app/boxcloud-contents"

interface Props {
  params: Promise<{ folderId: string }>
}
export default async function BoxCloud(props: Props) {
  const params = await props.params
  const folderId = parseInt(params.folderId)
  if (isNaN(folderId)) {
    return <div>Invalid folder id</div>
  }

  const folders = await db.select().from(foldersSchema).where(eq(foldersSchema.parent, folderId))
  const files = await db.select().from(filesSchema).where(eq(filesSchema.parent, folderId))

  return (
    <BoxCloudContents folders={folders} files={files} />
  )
}
