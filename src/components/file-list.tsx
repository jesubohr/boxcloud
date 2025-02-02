import { File, Folder } from "lucide-react"

interface FileItem {
  id: string
  name: string
  type: "file" | "folder"
  size: string
}

interface FileListProps {
  files: FileItem[]
  onFolderClick: (id: string) => void
}

export function FileList({ files, onFolderClick }: FileListProps) {
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
        <tbody>
          {files.map((file) => (
            <tr
              key={file.id}
              className="border-b border-gray-800 hover:bg-gray-800"
            >
              <td className="px-4 py-2">
                {file.type === "folder" ? (
                  <button
                    onClick={() => onFolderClick(file.id)}
                    className="flex w-full items-center text-left"
                  >
                    <Folder className="mr-2 h-5 w-5 text-blue-400" />
                    {file.name}
                  </button>
                ) : (
                  <a href="#" className="flex w-full items-center">
                    <File className="mr-2 h-5 w-5 text-gray-400" />
                    {file.name}
                  </a>
                )}
              </td>
              <td className="px-4 py-2 capitalize">{file.type}</td>
              <td className="px-4 py-2">{file.size}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
