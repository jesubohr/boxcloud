"use client"

import { useState } from "react"
import { Breadcrumb } from "~/components/breadcrumb"
import { FileList } from "~/components/file-list"
import { Header } from "~/components/header"

// Mock data
interface FileItem {
  id: string
  name: string
  type: "file" | "folder"
  size: string
  children?: FileItem[]
}

const initialFiles: FileItem[] = [
  {
    id: "1",
    name: "Documents",
    type: "folder",
    size: "-",
    children: [
      {
        id: "2",
        name: "Work",
        type: "folder",
        size: "-",
        children: [
          {
            id: "3",
            name: "Project Proposal.docx",
            type: "file",
            size: "2.5 MB",
          },
          { id: "4", name: "Budget.xlsx", type: "file", size: "1.8 MB" },
        ],
      },
      {
        id: "5",
        name: "Personal",
        type: "folder",
        size: "-",
        children: [
          { id: "6", name: "Resume.pdf", type: "file", size: "567 KB" },
          { id: "7", name: "Family Photo.jpg", type: "file", size: "4.2 MB" },
        ],
      },
    ],
  },
  {
    id: "8",
    name: "Downloads",
    type: "folder",
    size: "-",
    children: [
      { id: "9", name: "Movie.mp4", type: "file", size: "1.2 GB" },
      { id: "10", name: "Song.mp3", type: "file", size: "5.7 MB" },
    ],
  },
  { id: "11", name: "Notes.txt", type: "file", size: "12 KB" },
]

export default function Home() {
  const [currentPath, setCurrentPath] = useState<string[]>([])
  const [currentFiles, setCurrentFiles] = useState<FileItem[]>(initialFiles)

  const navigateToFolder = (folderId: string) => {
    const findFolder = (files: FileItem[], id: string): void => {
      for (const file of files) {
        if (file.id === id && file.type === "folder") {
          setCurrentPath([...currentPath, file.name])
          setCurrentFiles(file.children!)
          return
        }
        if (file.children) {
          findFolder(file.children, id)
        }
      }
    }
    findFolder(initialFiles, folderId)
  }

  const navigateToBreadcrumb = (index: number) => {
    if (index === -1) {
      setCurrentPath([])
      setCurrentFiles(initialFiles)
    } else {
      const newPath = currentPath.slice(0, index + 1)
      setCurrentPath(newPath)
      let files = initialFiles
      for (const folder of newPath) {
        files =
          files.find((f: FileItem) => f.name === folder && f.type === "folder")
            ?.children || []
      }
      setCurrentFiles(files)
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Breadcrumb path={currentPath} onNavigate={navigateToBreadcrumb} />
        <FileList files={currentFiles} onFolderClick={navigateToFolder} />
      </main>
    </div>
  )
}
