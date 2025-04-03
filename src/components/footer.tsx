import { Cloud } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-gray-900 py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Cloud className="h-5 w-5" />
              <span className="text-lg font-bold">Boxcloud</span>
            </div>
            <p className="text-sm text-gray-400">
              Secure cloud storage and file sharing for everyone.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-medium">Product</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="#" className="hover:text-gray-200">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-200">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-200">
                  Security
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-200">
                  Enterprise
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-medium">Resources</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="#" className="hover:text-gray-200">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-200">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-200">
                  Guides
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-200">
                  Support
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-medium">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="#" className="hover:text-gray-200">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-200">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-200">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-200">
                  Legal
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Boxcloud. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
