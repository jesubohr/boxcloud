import type { Folder, File } from "~/types"

export const mockFolders: Folder[] = [
  { id: "1", name: "Home", parent: null },
  { id: "2", name: "Documents", parent: "1" },
  { id: "3", name: "Work", parent: "2" },
  { id: "4", name: "Personal", parent: "2" },
  { id: "5", name: "Downloads", parent: "1" },
]

export const mockFiles: File[] = [
  {
    id: "4",
    name: "Project.docx",
    type: "docx",
    size: "2.5 MB",
    url: "/files/project.docx",
    parent: "3",
  },
  {
    id: "5",
    name: "Budget.xlsx",
    type: "xlsx",
    size: "1.8 MB",
    url: "/files/budget.xlsx",
    parent: "3",
  },
  {
    id: "6",
    name: "Resume.pdf",
    type: "pdf",
    size: "567 KB",
    url: "/files/resume.pdf",
    parent: "4",
  },
  {
    id: "7",
    name: "Family Photo.jpg",
    type: "jpg",
    size: "4.2 MB",
    url: "/files/family_photo.jpg",
    parent: "4",
  },
  {
    id: "9",
    name: "Movie.mp4",
    type: "mp4",
    size: "1.2 GB",
    url: "/files/movie.mp4",
    parent: "5",
  },
  {
    id: "10",
    name: "Song.mp3",
    type: "mp3",
    size: "5.7 MB",
    url: "/files/song.mp3",
    parent: "5",
  },
  {
    id: "11",
    name: "Notes.txt",
    type: "txt",
    size: "12 KB",
    url: "/files/notes.txt",
    parent: "1",
  },
]
