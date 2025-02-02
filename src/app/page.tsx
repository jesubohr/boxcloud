"use client"

import { useState, useMemo } from "react"
import { Header } from "~/components/header"
import { Breadcrumb } from "~/components/breadcrumb"
import { ItemList, FolderRow, FileRow } from "~/components/file-list"
import { mockFolders, mockFiles } from "~/lib/mockData"

export default function Home() {
  const [currentFolder, setCurrentFolder] = useState<string>("root")

  const currentFiles = useMemo(
    () => mockFiles.filter((file) => file.parent === currentFolder),
    [currentFolder],
  )
  const currentFolders = useMemo(
    () => mockFolders.filter((folder) => folder.parent === currentFolder),
    [currentFolder],
  )
  const breadcrumbs = useMemo(() => {
    const path = []
    let currentId = currentFolder
    while (currentId !== "root") {
      const folder = mockFolders.find((folder) => folder.id === currentId)
      path.unshift(folder?.name ?? "Unknown")
      currentId = folder?.parent ?? "root"
    }
    return path
  }, [currentFolder])

  function handleFolderClick(folderId: string) {
    setCurrentFolder(folderId)
  }

  function handleBreadcrumbClick(name: string) {
    const folderId = mockFolders.find((folder) => folder.name === name)?.id
    setCurrentFolder(folderId ?? "root")
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Breadcrumb items={breadcrumbs} onNavigate={handleBreadcrumbClick} />
        <ItemList>
          {currentFolders.map((folder) => (
            <FolderRow
              key={folder.id}
              folder={folder}
              onClick={handleFolderClick}
            />
          ))}
          {currentFiles.map((file) => (
            <FileRow key={file.id} file={file} />
          ))}
        </ItemList>
      </main>
    </div>
  )
}
