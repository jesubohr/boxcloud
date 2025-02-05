"use client"

import { useState, useMemo } from "react"
import { Header } from "~/components/header"
import { Breadcrumb } from "~/components/breadcrumb"
import { ItemList, FolderRow, FileRow } from "~/components/file-list"
import type { BoxFolder, BoxFile } from "~/types"

const ROOT_FOLDER_ID = 1

interface Props {
  folders: BoxFolder[]
  files: BoxFile[]
}
export default function BoxCloudContents({ folders, files }: Props) {
  const [currentFolder, setCurrentFolder] = useState<number>(ROOT_FOLDER_ID)
  const breadcrumbs = useMemo(() => {
    const path = []
    let currentId = currentFolder
    while (currentId !== ROOT_FOLDER_ID) {
      const folder = folders.find((folder) => folder.id === currentId)
      path.unshift(folder?.name ?? "Unknown")
      currentId = folder?.parent ?? ROOT_FOLDER_ID
    }
    return path
  }, [currentFolder, folders])

  function handleFolderClick(folderId: number) {
    setCurrentFolder(folderId)
  }

  function handleBreadcrumbClick(name: string) {
    const folderId = folders.find((folder) => folder.name === name)?.id
    setCurrentFolder(folderId ?? ROOT_FOLDER_ID)
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Breadcrumb items={breadcrumbs} onNavigate={handleBreadcrumbClick} />
        <ItemList>
          {folders.map((folder) => (
            <FolderRow
              key={folder.id}
              folder={folder}
              onClick={handleFolderClick}
            />
          ))}
          {files.map((file) => (
            <FileRow key={file.id} file={file} />
          ))}
        </ItemList>
      </main>
    </div>
  )
}
