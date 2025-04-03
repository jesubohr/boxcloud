import "server-only"

import { db } from "./index"
import { eq, and, isNull } from "drizzle-orm"
import { foldersTable, filesTable } from "~/server/db/schema"
import type { BoxFile } from "~/types"

/* QUERIES */
export function getFoldersByFolderId(folderId: number) {
  return db
    .select()
    .from(foldersTable)
    .where(eq(foldersTable.parent, folderId))
    .orderBy(foldersTable.id)
}

export function getFilesByFolderId(folderId: number) {
  return db
    .select()
    .from(filesTable)
    .where(eq(filesTable.parent, folderId))
    .orderBy(filesTable.id)
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

export async function getRootFolderForUser(userId: string) {
  const folder = await db
    .select()
    .from(foldersTable)
    .where(and(eq(foldersTable.ownerId, userId), isNull(foldersTable.parent)))
  return folder[0]
}

/* MUTATIONS */
export async function createFile(input: {
  file: Omit<BoxFile, "id">
  userId: string
}) {
  return await db.insert(filesTable).values({ ...input.file })
}

export async function onBoardUser(userId: string) {
  const existingRootFolder = await getRootFolderForUser(userId)
  if (existingRootFolder) return

  const rootFolder = await db
    .insert(foldersTable)
    .values({
      name: "Root",
      parent: null,
      ownerId: userId,
    })
    .$returningId()

  const rootFolderId = rootFolder[0]!.id

  await db.insert(foldersTable).values([
    {
      name: "Trash",
      parent: rootFolderId,
      ownerId: userId,
    },
    {
      name: "Starred",
      parent: rootFolderId,
      ownerId: userId,
    },
    {
      name: "Shared",
      parent: rootFolderId,
      ownerId: userId,
    },
  ])

  return rootFolderId
}
