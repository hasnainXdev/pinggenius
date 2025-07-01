"use client";

import { useEffect, useState } from "react";
import { Zap } from "lucide-react";
import { Button } from "./ui/button";
import { ModeToggle } from "./dark-mode-toggle";
import Link from "next/link";
import { UserButton, useUser } from "@clerk/nextjs";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { isSignedIn } = useUser();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 backdrop-blur-md transition-all duration-300 ${scrolled ? "bg-white/30 dark:bg-white/70 shadow-sm" : "bg-white/90 dark:bg-[#0d0d0d]/70"
        }`}
    >
      <div
        className={`mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-300 ${scrolled ? "max-w-5xl" : "max-w-7xl"
          }`}
      >
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-md flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <Link href="/">
              <span className="text-xl font-bold text-gray-700">
                PingGenius
              </span>
            </Link>
          </div>
          <div className="flex items-center space-x-3">
            {/* Optional Mode Toggle */}
            {/* <ModeToggle /> */}

            {isSignedIn ? (
              <>
                <Link href="/waitlist">
                  <Button
                    variant="secondary"
                    className="cursor-pointer bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-200 rounded-md font-base transition-all duration-200 hover:shadow hover:scale-105"
                  >
                    ✅ Already Waitlisted
                  </Button>
                </Link>

                {/* Clerk User Avatar Dropdown */}
                <UserButton
                  afterSignOutUrl="/"
                  appearance={{
                    elements: {
                      avatarBox: "w-9 h-9 ring-2 ring-blue-500",
                    },
                  }}
                />
              </>
            ) : (
              <Link href="/sign-in">
                <Button className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium transition-all duration-200 hover:shadow-lg hover:scale-105">
                  Join Waitlist
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
