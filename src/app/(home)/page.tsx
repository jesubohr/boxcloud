import { getRootFolder } from "~/server/db/queries"
import { redirect } from "next/navigation"

export default async function HomePage() {
  const rootFolder = await getRootFolder()
  return redirect(`/f/${rootFolder?.id}`)
}
