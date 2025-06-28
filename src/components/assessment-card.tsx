import { Button } from "@/components/ui/button";

export const AssessmentCard = () => {
  return (
    <div className="relative mx-auto w-full max-w-md transition-transform duration-500">
      <div className="relative rounded-3xl bg-gray-900 p-2 shadow-2xl">
        <div className="rounded-2xl bg-white overflow-hidden">
          {/* Phone header */}
          <div className="flex items-center justify-between px-4 py-3 bg-gray-50">
            <div className="flex items-center space-x-1">
              <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
              <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
              <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
            </div>
            <span className="text-xs font-medium text-gray-600">9:41</span>
            <div className="flex items-center space-x-1">
              <div className="w-4 h-2 bg-gray-400 rounded-sm"></div>
              <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
            </div>
          </div>

          {/* Assessment interface */}
          <div className="p-6 space-y-6">
            <div className="text-center">
              <h3 className="text-lg font-bold text-gray-900">
                Mathematics Quiz
              </h3>
              <p className="text-sm text-gray-600">Question 3 of 10</p>
            </div>

            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-primary h-2 rounded-full animate-progress"
                style={{ width: "30%" }}
              ></div>
            </div>

            <div className="space-y-4">
              <p className="text-base font-medium text-gray-800">
                What is the derivative of f(x) = 3x² + 2x - 1?
              </p>

              <div className="space-y-3">
                <button className="w-full p-3 text-left border-2 border-gray-200 rounded-lg hover:bg-gray-100 transition-colors">
                  <span className="text-sm">A) 6x + 2</span>
                </button>
                <button className="w-full p-3 text-left border-2 bg-primary/40 rounded-lg">
                  <span className="text-sm font-medium">B) 6x + 2</span>
                </button>
                <button className="w-full p-3 text-left border-2 border-gray-100 rounded-lg hover:bg-gray-100 transition-colors">
                  <span className="text-sm">C) 3x + 2</span>
                </button>
              </div>
            </div>

            <Button variant="secondary" className="w-full border">
              Next Question
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
