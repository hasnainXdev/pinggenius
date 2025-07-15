import { Zap } from "lucide-react";
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-slate-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">PingGenius</span>
          </div>
          <div className="flex space-x-8 text-sm text-gray-400">
            <Link href="/" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/" className="hover:text-white transition-colors">Terms</Link>
            <Link href="/" className="hover:text-white transition-colors">Support</Link>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          © 2024 PingGenius. All rights reserved. Built for founders who demand results.
        </div>
      </div>
    </footer>
  );
}
