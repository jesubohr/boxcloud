import type { BoxFolder, BoxFile } from "~/types"
import { deleteFile, deleteFolder } from "~/server/actions"
import { formatDate, formatSize } from "~/lib/utils"
import { useUser } from "@clerk/nextjs"
import Link from "next/link"
import {
  File as FileIcon,
  Folder as FolderIcon,
  EllipsisVertical as ActionsIcon,
  Trash2 as DeleteIcon,
  Download as DownloadIcon,
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "./ui/dropdown-menu"

export function ItemList({ children }: { children: React.ReactNode }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left">
        <thead>
          <tr className="border-b border-gray-700">
            <th className="w-2/5 px-4 py-2 font-semibold">Name</th>
            <th className="px-4 py-2 font-semibold">Type</th>
            <th className="px-4 py-2 font-semibold">Size</th>
            <th className="px-4 py-2 font-semibold">Created</th>
            <th></th>
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
      <td className="w-2/5 px-4 py-2">
        <a href={file.url} className="flex w-full items-center" target="_blank">
          <FileIcon className="mr-2 h-5 w-5 text-gray-400" />
          {file.name}
        </a>
      </td>
      <td className="px-4 py-2 capitalize">{file.type}</td>
      <td className="px-4 py-2">{formatSize(file.size) ?? "-"}</td>
      <td className="px-4 py-2">{formatDate(file.createdAt)}</td>
      <td className="px-4 py-2">
        <ActionsMenu onDelete={() => deleteFile(file.id)} />
      </td>
    </tr>
  )
}

export function FolderRow({ folder }: { folder: BoxFolder }) {
  return (
    <tr key={folder.id} className="border-b border-gray-800 hover:bg-gray-800">
      <td className="w-2/5 px-4 py-2">
        <Link
          href={`/f/${folder.id}`}
          className="flex w-full items-center text-left"
        >
          <FolderIcon className="mr-2 h-5 w-5 text-blue-400" />
          {folder.name}
        </Link>
      </td>
      <td className="px-4 py-2 capitalize">Folder</td>
      <td className="px-4 py-2">-</td>
      <td className="px-4 py-2">{formatDate(folder.createdAt)}</td>
      <td className="px-4 py-2">
        <ActionsMenu onDelete={() => deleteFolder(folder.id)} />
      </td>
    </tr>
  )
}

interface ActionsMenuProps {
  onDelete: () => void
}
function ActionsMenu({ onDelete }: ActionsMenuProps) {
  const user = useUser()
  if (!user.user) return null

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="rounded-md p-2 hover:bg-gray-700 focus:outline-none">
        <ActionsIcon className="h-5 w-5 text-gray-400" />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuItem>
          <DownloadIcon className="mr-2 h-5 w-5" />
          Download
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={onDelete} aria-label="Delete Item">
          <DeleteIcon className="mr-2 h-5 w-5" />
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
