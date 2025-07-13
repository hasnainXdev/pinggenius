"use client";
import { useUser } from "@clerk/nextjs";
import React from "react";

const Waitlist = () => {
  const { user, isSignedIn } = useUser();

  return (
    <div className="h-screen flex items-center justify-center bg-white dark:bg-[#0d0d0d] px-4">
      <div className="max-w-lg text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          🎉 You're on the Waitlist!
        </h1>
        <p className="text-gray-600 dark:text-gray-300 text-lg">
          We'll notify you when PingGenius launches.
          You've successfully joined the waitlist. Stay tuned!
        </p>
        <p className="mt-4 text-sm text-gray-700 dark:text-gray-300">
          We appreciate your early support 🙌
        </p>
      </div>
    </div>
  );
};

export default Waitlist;
