import {
  getFoldersByFolderId,
  getFilesByFolderId,
  getAllParentsByFolderId,
} from "~/server/db/queries"
import BoxCloudContents from "./boxcloud-contents"

interface Props {
  params: Promise<{ folderId: string }>
}
export default async function BoxCloud(props: Props) {
  const params = await props.params
  const folderId = parseInt(params.folderId)
  if (isNaN(folderId)) {
    return <div>Invalid folder id</div>
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
