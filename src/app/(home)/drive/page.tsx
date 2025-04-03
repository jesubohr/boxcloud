import { auth } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"
import { getRootFolderForUser, onBoardUser } from "~/server/db/queries"
import { Button } from "~/components/ui/button"

export default async function DrivePage() {
  const { userId } = await auth()
  if (!userId) return redirect("/")

  const rootFolder = await getRootFolderForUser(userId)
  if (!rootFolder) {
    return (
      <form
        action={async () => {
          "use server";
          const { userId } = await auth()
          if (!userId) return redirect("/")

          const rootFolderId = await onBoardUser(userId)
          return redirect(`/f/${rootFolderId}`)
        }}
      >
        <Button
          type="submit"
          className="border border-gray-700 bg-gradient-to-r from-gray-800 to-gray-900 text-gray-200 hover:from-gray-700 hover:to-gray-800"
        >
          Get started
        </Button>
      </form>
    )
  }

  return redirect(`/f/${rootFolder.id}`)
}
