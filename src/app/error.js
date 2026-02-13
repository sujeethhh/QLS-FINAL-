"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-gray-100 px-4">
      <div className="text-center max-w-md">
        <div className="text-6xl font-bold text-[var(--brand-primary)] mb-4">Oops!</div>
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Something went wrong</h1>
        <p className="text-gray-600 mb-8">
          We encountered an unexpected error. Please try again or return to the homepage.
        </p>
        <div className="flex gap-4 justify-center">
          <button
            onClick={reset}
            className="bg-[var(--brand-primary)] hover:bg-[var(--brand-dark)] text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}
