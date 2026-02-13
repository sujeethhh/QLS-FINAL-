export default function CourseLoading() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero skeleton */}
      <div className="h-[600px] bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900 animate-pulse" />
        <div className="relative z-10 flex h-full items-center">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl space-y-6">
              <div className="h-16 w-3/4 bg-white/10 rounded animate-pulse" />
              <div className="h-6 w-1/2 bg-white/10 rounded animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      {/* Content skeleton */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 space-y-4">
            <div className="h-8 w-48 bg-gray-200 rounded animate-pulse" />
            <div className="space-y-3 mt-4">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="h-4 bg-gray-100 rounded animate-pulse" style={{ width: `${90 - i * 10}%` }} />
              ))}
            </div>
            <div className="h-8 w-48 bg-gray-200 rounded animate-pulse mt-8" />
            <div className="space-y-3 mt-4">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gray-200 rounded-full animate-pulse" />
                  <div className="h-4 bg-gray-100 rounded animate-pulse" style={{ width: `${70 + Math.random() * 25}%` }} />
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-4">
            <div className="h-64 bg-gray-200 rounded-xl animate-pulse sticky top-24" />
          </div>
        </div>
      </div>
    </div>
  );
}
