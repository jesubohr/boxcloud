export type Folder = {
  id: string
  name: string
  type: "folder"
  parent: string | null
}

export type File = {
  id: string
  name: string
  size: string
  url: string
  type: "file"
  parent: string | null
}
