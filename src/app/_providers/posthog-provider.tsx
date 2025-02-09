"use client"

import posthog from "posthog-js"
import { PostHogProvider } from "posthog-js/react"
import { env } from "~/env"
import React, { useEffect } from "react"
import dynamicLoader from "next/dynamic"

const PostHogPageView = dynamicLoader(() => import("./pageview-tracker"), { ssr: false })

export function CSPostHogProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    posthog.init(env.NEXT_PUBLIC_POSTHOG_KEY, {
      api_host: "/ingest",
      ui_host: env.NEXT_PUBLIC_POSTHOG_HOST,
      person_profiles: "identified_only",
      capture_pageview: false,
    })
  }, [])

  return (
    <PostHogProvider client={posthog}>
      <PostHogPageView />
      {children}
    </PostHogProvider>
  )
}
