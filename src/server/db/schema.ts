import { int, bigint, text, date, index, singlestoreTableCreator } from "drizzle-orm/singlestore-core"

export const createTable = singlestoreTableCreator(
  (name) => `boxcloud_${name}`,
)

export const folders = createTable("folders_table", {
  id: bigint("id", { mode: "number", unsigned: true }).primaryKey().autoincrement(),
  name: text("name").notNull(),
  parent: bigint("parent", { mode: "number", unsigned: true }),
  created_at: date("created_at").notNull(),
}, (table) => {
  return [
    index("parent_index").on(table.parent),
  ]
})

export const files = createTable("files_table", {
  id: bigint("id", { mode: "number", unsigned: true }).primaryKey().autoincrement(),
  name: text("name").notNull(),
  type: text("type").notNull(),
  size: int("size").notNull(),
  url: text("url").notNull(),
  parent: bigint("parent", { mode: "number", unsigned: true }).notNull(),
  created_at: date("created_at").notNull(),
}, (table) => {
  return [
    index("parent_index").on(table.parent),
  ]
})
