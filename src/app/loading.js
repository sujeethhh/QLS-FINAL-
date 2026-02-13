export default function Loading() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header skeleton */}
      <div className="border-b border-slate-100 py-6 px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="h-12 w-48 bg-gray-200 rounded animate-pulse" />
          <div className="hidden md:flex gap-6">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="h-4 w-20 bg-gray-200 rounded animate-pulse" />
            ))}
          </div>
        </div>
      </div>

      {/* Hero skeleton */}
      <div className="h-[400px] bg-gray-200 animate-pulse" />

      {/* Content skeleton */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 space-y-4">
            <div className="h-8 w-64 bg-gray-200 rounded animate-pulse" />
            <div className="h-4 w-full bg-gray-100 rounded animate-pulse" />
            <div className="h-4 w-full bg-gray-100 rounded animate-pulse" />
            <div className="h-4 w-3/4 bg-gray-100 rounded animate-pulse" />
            <div className="h-4 w-full bg-gray-100 rounded animate-pulse mt-6" />
            <div className="h-4 w-5/6 bg-gray-100 rounded animate-pulse" />
          </div>
          <div className="lg:col-span-4">
            <div className="h-64 bg-gray-200 rounded-xl animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
}
