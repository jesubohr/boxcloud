import { ChevronRight, Home } from "lucide-react"
import { Button } from "~/components/ui/button"

interface BreadcrumbProps {
  path: string[]
  onNavigate: (index: number) => void
}

export function Breadcrumb({ path, onNavigate }: BreadcrumbProps) {
  return (
    <nav className="mb-4 flex items-center space-x-2">
      <Button variant="ghost" size="sm" onClick={() => onNavigate(-1)}>
        <Home className="h-4 w-4" />
      </Button>
      {path.map((folder, index) => (
        <div key={index} className="flex items-center">
          <ChevronRight className="mx-1 h-4 w-4" />
          <Button variant="ghost" size="sm" onClick={() => onNavigate(index)}>
            {folder}
          </Button>
        </div>
      ))}
    </nav>
  )
}
