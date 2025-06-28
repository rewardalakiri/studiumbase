import { Button } from "@/components/ui/button";
import { GraduationCap, BookOpen, Users, BarChart3 } from "lucide-react";
import { AssessmentCard } from "@/components/assessment-card";

export default function HomePage() {
  return (
    <div className="flex-1 relative overflow-hidden">
      <main className="relative z-10 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-6 w-full">
                <h1 className="text-5xl font-bold tracking-tight lg:text-6xl xl:text-7xl">
                  Digital
                  <br />
                  assessments
                  <br />
                  start here.
                </h1>
                <p className="text-xl  max-w-lg leading-relaxed">
                  Create engaging assessments, track student progress, and gain
                  valuable insights. Build better learning experiences today.
                </p>
              </div>

              <Button
                size="lg"
                className="px-8 py-4 text-lg font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
              >
                Create an Assessment
              </Button>

              {/* Feature highlights */}
              <div className="grid grid-cols-2 gap-6 pt-8">
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0">
                    <BookOpen className="h-6 w-6 " />
                  </div>
                  <span className="text-sm font-medium">
                    Interactive Questions
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0">
                    <BarChart3 className="h-6 w-6" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">
                    Real-time Analytics
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0">
                    <Users className="h-6 w-6" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">
                    Collaborative Tools
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <span className="text-sm font-medium">Smart Grading</span>
                </div>
              </div>
            </div>

            {/* Right Hero Image */}
            <div className="relative">
              <div className="relative z-10">
                {/* Main device mockup */}
                <AssessmentCard />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section with additional info */}
        <div className="bg-gray-50 py-16 relative">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center space-y-4">
              <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                Trusted by educators worldwide
              </p>
              <div className="flex items-center justify-center space-x-8 opacity-60">
                <div className="text-2xl font-bold text-gray-400 hover:text-gray-600 transition-colors duration-300">
                  University A
                </div>
                <div className="text-2xl font-bold text-gray-400 hover:text-gray-600 transition-colors duration-300">
                  School B
                </div>
                <div className="text-2xl font-bold text-gray-400 hover:text-gray-600 transition-colors duration-300">
                  Institute C
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
