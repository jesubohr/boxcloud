import {
  SignInButton,
  SignedIn,
  SignUpButton,
  SignedOut,
  UserButton,
} from "@clerk/nextjs"
import { Cloud } from "lucide-react"
import { Button } from "~/components/ui/button"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-gray-900/60">
      <div className="container mx-auto flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Cloud className="h-6 w-6" />
          <span className="text-xl font-bold">Boxcloud</span>
        </div>
        <div className="flex items-center gap-6">
          <SignedOut>
            <SignInButton>
              <Button
                variant="ghost"
                className="hidden text-gray-300 hover:bg-gray-800 hover:text-gray-100 md:flex"
              >
                Sign In
              </Button>
            </SignInButton>
            <SignUpButton>
              <Button className="border border-gray-700 bg-gray-800 text-gray-100 hover:bg-gray-700">
                Get Started
              </Button>
            </SignUpButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </header>
  )
}
