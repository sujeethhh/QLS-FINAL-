import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-gray-100 px-4">
      <div className="text-center max-w-lg">
        <div className="text-8xl font-bold text-[#3B82F6] mb-4">404</div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
          Page Not Found
        </h1>
        <p className="text-gray-600 mb-8 text-lg">
          The page you&apos;re looking for doesn&apos;t exist or may have moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="bg-[#3B82F6] hover:bg-[#2563EB] text-white px-8 py-3 rounded-lg font-medium transition-colors text-center"
          >
            Go to Homepage
          </Link>
          <Link
            href="/Events"
            className="bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 px-8 py-3 rounded-lg font-medium transition-colors text-center"
          >
            Browse Events
          </Link>
        </div>
      </div>
    </div>
  );
}
