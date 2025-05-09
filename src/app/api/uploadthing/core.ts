import { createUploadthing, type FileRouter } from "uploadthing/next"
import { UploadThingError } from "uploadthing/server"
import { z } from "zod"
import { auth } from "@clerk/nextjs/server"
import { createFile, getFolderById } from "~/server/db/queries"

const f = createUploadthing()

// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
  // Define as many FileRoutes as you like, each with a unique routeSlug
  boxUploader: f({
    blob: {
      /**
       * For full list of options and defaults, see the File Route API reference
       * @see https://docs.uploadthing.com/file-routes#route-config
       */
      maxFileSize: "2MB",
      maxFileCount: 10,
    },
  })
    .input(z.object({ folderId: z.number() }))
    // Set permissions and file types for this FileRoute
    .middleware(async ({ input }) => {
      // This code runs on your server before upload
      const user = await auth()

      // If you throw, the user will not be able to upload
      // eslint-disable-next-line @typescript-eslint/only-throw-error
      if (!user.userId) throw new UploadThingError("Unauthorized")

      const folder = await getFolderById(input.folderId)
      
      // eslint-disable-next-line @typescript-eslint/only-throw-error
      if (!folder) throw new UploadThingError("Folder not found")

      if (folder.ownerId !== user.userId) {
        // eslint-disable-next-line @typescript-eslint/only-throw-error
        throw new UploadThingError("Unauthorized")
      }

      // Whatever is returned here is accessible in onUploadComplete as `metadata`
      return { userId: user.userId, folderId: input.folderId }
    })
    .onUploadComplete(async ({ metadata, file }) => {
      // This code RUNS ON YOUR SERVER after upload
      await createFile({
        file: {
          name: file.name,
          size: file.size,
          url: file.url,
          type: file.type,
          createdAt: new Date(),
          updatedAt: new Date(),
          parent: metadata.folderId,
          ownerId: metadata.userId,
        },
        userId: metadata.userId
      })

      // !!! Whatever is returned here is sent to the clientside `onClientUploadComplete` callback
      return { uploadedBy: metadata.userId }
    }),
} satisfies FileRouter

export type OurFileRouter = typeof ourFileRouter
