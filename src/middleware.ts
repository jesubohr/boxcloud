import { NextResponse, type NextRequest } from "next/server"
import { clerkMiddleware } from "@clerk/nextjs/server"

async function customMiddleware(_: unknown, req: NextRequest) {
  // Extract the locale from the Accept-Language header.
  const acceptLanguage = req.headers.get("accept-language") ?? "en"
  const detectedLocale = acceptLanguage.split(",")[0]!

  // Create a NextResponse and set the locale cookie.
  const res = NextResponse.next()
  res.cookies.set("locale", detectedLocale, { path: "/" })
  return res
}

export default clerkMiddleware(customMiddleware)
export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
}
