import { type Config } from "drizzle-kit"

/* eslint-disable @typescript-eslint/no-unused-vars */
import { env } from "~/env"

export default {
  schema: "./src/server/db/schema.ts",
  dialect: "singlestore",
  tablesFilter: ["boxcloud_*"],
} satisfies Config
