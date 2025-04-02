"use server"

import { foldersTable, filesTable } from "~/server/db/schema"
import { eq, and } from "drizzle-orm"
import { db } from "./db"
import { auth } from "@clerk/nextjs/server"
import { UTApi } from "uploadthing/server"
import { cookies } from "next/headers"

const utApi = new UTApi()

async function refreshPage() {
  const cookie = await cookies()
  cookie.set("force-refresh", JSON.stringify(Math.random), { path: "/" })
}

export async function deleteFile(fileId: number) {
  const user = await auth()
  if (!user.userId) return { error: "Unauthorized" }

  const query = and(eq(filesTable.id, fileId), eq(filesTable.ownerId, user.userId))
  const [file] = await db
    .select()
    .from(filesTable)
    .where(query)

  if (!file) return { error: "File not found" }

  await db.delete(filesTable).where(query)
  await utApi.deleteFiles([file.url.split("/").pop()!])
  await refreshPage()
  return { success: true }
}

export async function deleteFolder(folderId: number) {
  const user = await auth()
  if (!user.userId) return { error: "Unauthorized" }

  const query = and(eq(foldersTable.id, folderId), eq(foldersTable.ownerId, user.userId))
  const [folder] = await db
    .select()
    .from(foldersTable)
    .where(query)

  if (!folder) return { error: "Folder not found" }
  
  await refreshPage()
  return { success: true }
}
