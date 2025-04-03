import { Header } from "~/components/header"
import { Footer } from "~/components/footer"

export default async function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-gray-950 text-gray-200">
      <Header />
      {children}
      <Footer />
    </div>
  )
}
