import { ChevronRight, Home } from "lucide-react"
import { Button } from "~/components/ui/button"
import Link from "next/link"

interface BreadcrumbProps {
  items: { id: number; name: string }[]
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="mb-4 flex items-center space-x-2">
      <Button asChild variant="ghost" size="sm">
        <Link href="/f/1">
          <Home className="h-4 w-4" />
        </Link>
      </Button>
      {items.map((folder, index) => (
        <div key={index} className="flex items-center">
          <ChevronRight className="mx-1 h-4 w-4" />
          <Button asChild variant="ghost" size="sm">
            <Link href={`/f/${folder.id}`}>{folder.name}</Link>
          </Button>
        </div>
      ))}
    </nav>
  )
}
