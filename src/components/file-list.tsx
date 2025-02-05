import type { BoxFolder, BoxFile } from "~/types"
import { File as FileIcon, Folder as FolderIcon } from "lucide-react"
import { formatDate, formatSize } from "~/lib/utils"

export function ItemList({ children }: { children: React.ReactNode }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left">
        <thead>
          <tr className="border-b border-gray-700">
            <th className="px-4 py-2 font-semibold">Name</th>
            <th className="px-4 py-2 font-semibold">Type</th>
            <th className="px-4 py-2 font-semibold">Size</th>
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  )
}

export function FileRow({ file }: { file: BoxFile }) {
  return (
    <tr key={file.id} className="border-b border-gray-800 hover:bg-gray-800">
      <td className="px-4 py-2">
        <a href={file.url} className="flex w-full items-center" target="_blank">
          <FileIcon className="mr-2 h-5 w-5 text-gray-400" />
          {file.name}
        </a>
      </td>
      <td className="px-4 py-2 capitalize">{file.type}</td>
      <td className="px-4 py-2">{formatSize(file.size) ?? "-"}</td>
      <td className="px-4 py-2">{formatDate(file.created_at)}</td>
    </tr>
  )
}

interface FolderRowProps {
  folder: BoxFolder
  onClick: (id: number) => void
}
export function FolderRow({ folder, onClick }: FolderRowProps) {
  return (
    <tr key={folder.id} className="border-b border-gray-800 hover:bg-gray-800">
      <td className="px-4 py-2">
        <button
          onClick={() => onClick(folder.id)}
          className="flex w-full items-center text-left"
        >
          <FolderIcon className="mr-2 h-5 w-5 text-blue-400" />
          {folder.name}
        </button>
      </td>
      <td className="px-4 py-2 capitalize">Folder</td>
      <td className="px-4 py-2">-</td>
      <td className="px-4 py-2">{formatDate(folder.created_at)}</td>
    </tr>
  )
}
