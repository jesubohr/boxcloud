import { ChevronRight, Home } from "lucide-react"
import { Button } from "~/components/ui/button"

interface BreadcrumbProps {
  items: string[]
  onNavigate: (id: string) => void
}

export function Breadcrumb({ items, onNavigate }: BreadcrumbProps) {
  return (
    <nav className="mb-4 flex items-center space-x-2">
      <Button variant="ghost" size="sm" onClick={() => onNavigate("root")}>
        <Home className="h-4 w-4" />
      </Button>
      {items.map((folder, index) => (
        <div key={index} className="flex items-center">
          <ChevronRight className="mx-1 h-4 w-4" />
          <Button variant="ghost" size="sm" onClick={() => onNavigate(folder)}>
            {folder}
          </Button>
        </div>
      ))}
    </nav>
  )
}
