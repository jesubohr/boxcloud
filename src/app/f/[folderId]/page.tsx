import {
  getFoldersByFolderId,
  getFilesByFolderId,
  getAllParentsByFolderId,
  getFolderByIdAndUserId,
} from "~/server/db/queries"
import { redirect } from "next/navigation"
import { auth } from "@clerk/nextjs/server"
import BoxCloudContents from "./boxcloud-contents"
interface Props {
  params: Promise<{ folderId: string }>
}
export default async function BoxCloud(props: Props) {
  const params = await props.params
  const folderId = parseInt(params.folderId)

  const { userId } = await auth()
  if (!userId) return redirect("/")

  if (isNaN(folderId)) {
    return redirect("/drive")
  }

  const folder = await getFolderByIdAndUserId(folderId, userId)
  if (!folder) {
    return redirect("/drive")
  }

  const [folders, files, parents] = await Promise.all([
    getFoldersByFolderId(folderId),
    getFilesByFolderId(folderId),
    getAllParentsByFolderId(folderId),
  ])

  return (
    <BoxCloudContents
      folders={folders}
      files={files}
      parents={parents}
      currentFolderId={folderId}
    />
  )
}
