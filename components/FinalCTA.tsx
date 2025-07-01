import { ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
          Supercharge Your Outreach with AI
        </h2>
        <p className="text-lg sm:text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
          Join 1000+ founders & sales pros using PingGenius to send messages that actually get replies. It's fast, smart, and feels human.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Link href="/sign-in">
            <button className="cursor-pointer bg-white hover:bg-gray-100 text-blue-800 px-8 py-4 rounded-md font-semibold text-lg transition-all duration-200 shadow-md hover:shadow-xl hover:scale-105 flex items-center">
              Try PingGenius Free
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </Link>
        </div>

        <div className="flex flex-wrap justify-center gap-6 text-sm text-blue-100">
          <div className="flex items-center">
            <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
            No credit card required
          </div>
          <div className="flex items-center">
            <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
            20+ messages free
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
