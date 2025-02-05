import type { BoxFolder, BoxFile } from "~/types"
import { Header } from "~/components/header"
import { Breadcrumb } from "~/components/breadcrumb"
import { ItemList, FolderRow, FileRow } from "~/components/file-list"

interface Props {
  folders: BoxFolder[]
  files: BoxFile[]
  parents: BoxFolder[]
}
export default function BoxCloudContents({ folders, files, parents }: Props) {
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
      </main>
    </div>
  )
}
