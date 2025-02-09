"use client"

import type { BoxFolder, BoxFile } from "~/types"
import { Header } from "~/components/header"
import { Breadcrumb } from "~/components/breadcrumb"
import { UploadButton } from "~/components/uploadthing"
import { ItemList, FolderRow, FileRow } from "~/components/file-list"
import { useRouter } from "next/navigation"

interface Props {
  folders: BoxFolder[]
  files: BoxFile[]
  parents: BoxFolder[]
  currentFolderId: number
}
export default function BoxCloudContents({ folders, files, parents, currentFolderId }: Props) {
  const navigate = useRouter()

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Breadcrumb items={parents} />
        <ItemList>
          {folders.map((folder) => (
            <FolderRow key={folder.id} folder={folder} />
          ))}
          {files.map((file) => (
            <FileRow key={file.id} file={file} />
          ))}
        </ItemList>
        <UploadButton
          className="mt-10"
          input={{ folderId: currentFolderId }}
          endpoint="imageUploader"
          onClientUploadComplete={() => navigate.refresh()}
        />
      </main>
    </div>
  )
}
