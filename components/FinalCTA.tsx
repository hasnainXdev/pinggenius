import { ArrowRight, CheckCircle } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
          Ready to 3x Your Response Rates?
        </h2>
        <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
          Join 1000+ founders and sales professionals who are already using PingGenius to generate
          personalized outreach that actually converts.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <button className="bg-white hover:bg-gray-50 text-blue-700 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:shadow-xl hover:scale-105 flex items-center">
            Generate Your First Message Now
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div>

        <div className="flex items-center justify-center space-x-8 text-sm text-blue-200">
          <div className="flex items-center">
            <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
            20+ messages free
          </div>
          <div className="flex items-center">
            <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
            No setup required
          </div>
          <div className="flex items-center">
            <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
            Cancel anytime
          </div>
        </div>
      </div>
    </section>
  );
}
