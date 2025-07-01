"use client";

import { useEffect, useState } from "react";
import { Zap } from "lucide-react";
import { Button } from "./ui/button";
import { ModeToggle } from "./dark-mode-toggle";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 backdrop-blur-md transition-all duration-300 ${
        scrolled ? "bg-black/70 dark:bg-black/30 shadow-sm" : "bg-black/90 dark:bg-[#0d0d0d]/70"
      }`}
    >
      <div
        className={`mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-300 ${
          scrolled ? "max-w-5xl" : "max-w-7xl"
        }`}
      >
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              PingGenius
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <ModeToggle />
            <Button className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-200 hover:shadow-lg hover:scale-105">
              Join Waitlist
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
