import type { Folder, File } from "~/types"

export const mockFolders: Folder[] = [
  { id: "root", name: "Home", type: "folder", parent: null }, // root folder
  { id: "1", name: "Documents", type: "folder", parent: "root" },
  { id: "2", name: "Work", type: "folder", parent: "1" },
  { id: "3", name: "Personal", type: "folder", parent: "1" },
  { id: "4", name: "Downloads", type: "folder", parent: "root" },
]

export const mockFiles: File[] = [
  {
    id: "4",
    name: "Project.docx",
    type: "file",
    size: "2.5 MB",
    url: "/files/project.docx",
    parent: "2",
  },
  {
    id: "5",
    name: "Budget.xlsx",
    type: "file",
    size: "1.8 MB",
    url: "/files/budget.xlsx",
    parent: "2",
  },
  {
    id: "6",
    name: "Resume.pdf",
    type: "file",
    size: "567 KB",
    url: "/files/resume.pdf",
    parent: "3",
  },
  {
    id: "7",
    name: "Family Photo.jpg",
    type: "file",
    size: "4.2 MB",
    url: "/files/family_photo.jpg",
    parent: "3",
  },
  {
    id: "9",
    name: "Movie.mp4",
    type: "file",
    size: "1.2 GB",
    url: "/files/movie.mp4",
    parent: "4",
  },
  {
    id: "10",
    name: "Song.mp3",
    type: "file",
    size: "5.7 MB",
    url: "/files/song.mp3",
    parent: "4",
  },
  {
    id: "11",
    name: "Notes.txt",
    type: "file",
    size: "12 KB",
    url: "/files/notes.txt",
    parent: "root",
  },
]
