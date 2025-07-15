"use client";
import { Brain, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Hero() {


  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 pt-20 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-8">
            <Brain className="w-4 h-4 mr-2" />
            Powered by advanced AI to craft replies that get responses.
          </div>

          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Generate Ultra-Personalized
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent block">
              Cold Outreach in Seconds
            </span>
          </h1>

          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            Generic messages don’t work. PingGenius uses AI to craft personalized outreach that actually gets replies perfect for indie hackers, startup founders, and solo teams.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link href={"/waitlist-signin"}>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-md font-semibold transition-all duration-200 hover:shadow-xl hover:scale-105 flex items-center cursor-pointer">
                Join Waitlist
                <ArrowRight className="w-5 h-5 ml-1" />
              </Button>
            </Link>
          </div>

          <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
            {[
              "No credit card required",
              "Start in 30 seconds",
              "20+ messages free",
            ].map((text, idx) => (
              <div key={idx} className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                {text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
