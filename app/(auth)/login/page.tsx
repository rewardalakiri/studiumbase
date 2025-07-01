import { AuthForm } from "@/components/auth-form"
import Image from "next/image"

export default function LoginPage() {
  return (
    <div className="min-h-screen flex">
      {/* Left side - Form */}
      <div className="flex-1 flex items-center justify-center p-8 lg:p-12">
        <div className="w-full max-w-md">
          <AuthForm isModal={false} />
        </div>
      </div>

      {/* Right side - Image (hidden on mobile) */}
      <div className="hidden lg:flex flex-1 bg-gradient-to-br from-blue-50 to-indigo-100 items-center justify-center p-12">
        <div className="max-w-lg text-center space-y-6">
          <div className="relative w-64 h-64 mx-auto">
            <Image
              src="/placeholder.svg?height=256&width=256"
              alt="Assessment illustration"
              fill
              className="object-contain"
            />
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-gray-900">Create Assessments at Scale</h2>
            <p className="text-lg text-gray-600">
              Build, share, and manage online assessments with ease. Perfect for educators, trainers, and organizations.
            </p>
          </div>
          <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Easy Creation</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>Instant Sharing</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span>Real-time Results</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
