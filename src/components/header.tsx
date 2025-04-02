import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs"

export function Header() {
  return (
    <header className="bg-gray-800 py-4">
      <div className="container mx-auto flex items-center justify-between px-4">
        <h1 className="text-2xl font-bold">BoxCloud</h1>
        <div className="flex items-center gap-8">
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </header>
  )
}
