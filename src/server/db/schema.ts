import {
  int,
  bigint,
  text,
  index,
  timestamp,
  singlestoreTableCreator,
} from "drizzle-orm/singlestore-core"

export const createTable = singlestoreTableCreator((name) => `boxcloud_${name}`)

export const foldersTable = createTable(
  "folders_table",
  {
    id: bigint("id", { mode: "number", unsigned: true })
      .primaryKey()
      .autoincrement(),
    ownerId: text("owner_id").notNull(),
    name: text("name").notNull(),
    parent: bigint("parent", { mode: "number", unsigned: true }),
    createdAt: timestamp("created_at").notNull().defaultNow(),
    updatedAt: timestamp("updated_at").notNull().defaultNow(),
  },
  (table) => {
    return [
      index("parent_index").on(table.parent),
      index("owner_id_index").on(table.ownerId),
    ]
  },
)

export const filesTable = createTable(
  "files_table",
  {
    id: bigint("id", { mode: "number", unsigned: true })
      .primaryKey()
      .autoincrement(),
    ownerId: text("owner_id").notNull(),
    name: text("name").notNull(),
    type: text("type").notNull(),
    size: int("size").notNull(),
    url: text("url").notNull(),
    parent: bigint("parent", { mode: "number", unsigned: true }).notNull(),
    createdAt: timestamp("created_at").notNull().defaultNow(),
    updatedAt: timestamp("updated_at").notNull().defaultNow(),
  },
  (table) => {
    return [
      index("parent_index").on(table.parent),
      index("owner_id_index").on(table.ownerId),
    ]
  },
)
