import { Button } from "@/components/ui/button"
import Link from "next/link"
import { BookOpen, Users, BarChart3 } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <header className="border-b bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <BookOpen className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">Studiumbase</span>
          </div>
          <Link href="/login">
            <Button>Sign In</Button>
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 leading-tight">
            Create Assessments
            <span className="text-blue-600"> at Scale</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Build, share, and manage online assessments with ease. Perfect for educators, trainers, and organizations
            looking to evaluate knowledge effectively.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/login">
              <Button size="lg" className="px-8">
                Get Started Free
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="px-8 bg-transparent">
              View Demo
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <BookOpen className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold">Easy Creation</h3>
              <p className="text-gray-600">
                Create assessments manually or import from XLSX files with support for multiple question types.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold">Instant Sharing</h3>
              <p className="text-gray-600">
                Share assessments with a simple link and key. Set rules and manage access with ease.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                <BarChart3 className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold">Real-time Results</h3>
              <p className="text-gray-600">
                Get instant feedback and export results to PDF when allowed by the assessment creator.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
