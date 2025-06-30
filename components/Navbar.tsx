import { Zap } from "lucide-react";
import { Button } from "./ui/button";
import { ModeToggle } from "./dark-mode-toggle";

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">PingGenius</span>
          </div>
          <div className="flex items-center space-x-3">
          <ModeToggle/>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-200 hover:shadow-lg hover:scale-105">
            Get Started Free
          </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
