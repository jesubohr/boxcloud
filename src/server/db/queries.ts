import "server-only"

import { db } from "./index"
import { eq } from "drizzle-orm"
import { foldersTable, filesTable } from "~/server/db/schema"
import type { BoxFile } from "~/types"

/* QUERIES */
export function getFoldersByFolderId(folderId: number) {
  return db
    .select()
    .from(foldersTable)
    .where(eq(foldersTable.parent, folderId))
    .orderBy(foldersTable.name)
}

export function getFilesByFolderId(folderId: number) {
  return db
    .select()
    .from(filesTable)
    .where(eq(filesTable.parent, folderId))
    .orderBy(filesTable.name)
}

export async function getAllParentsByFolderId(folderId: number) {
  const parents = []
  let currentFolderId: number | null = folderId
  while (currentFolderId !== null) {
    const folder = await db
      .selectDistinct()
      .from(foldersTable)
      .where(eq(foldersTable.id, currentFolderId))
    if (!folder[0]) break
    parents.unshift(folder[0])
    currentFolderId = folder[0].parent
  }
  return parents
}

export async function getFolderById(folderId: number) {
  const folder = await db
    .select()
    .from(foldersTable)
    .where(eq(foldersTable.id, folderId))
  return folder[0]
}

/* MUTATIONS */
export async function createFile(input: { file: Omit<BoxFile, "id">, userId: string }) {
  return await db.insert(filesTable).values({ ...input.file })
}
