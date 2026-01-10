import { Loader2 } from "lucide-react";

export function LoadingState() {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 to-slate-100 flex items-center justify-center">
      <div className="max-w-7xl w-full mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden p-8 lg:p-12">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Image Skeleton */}
            <div className="space-y-4">
              <div className="aspect-square bg-linear-to-br from-slate-200 to-slate-300 rounded-2xl animate-pulse relative overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Loader2 className="w-16 h-16 text-slate-400 animate-spin" />
                </div>
              </div>

              <div className="flex gap-3">
                {[1, 2, 3].map((idx) => (
                  <div
                    key={idx}
                    className="flex-1 aspect-square bg-linear-to-br from-slate-200 to-slate-300 rounded-xl animate-pulse relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
                  </div>
                ))}
              </div>
            </div>

            {/* Info Skeleton */}
            <div className="flex flex-col space-y-6">
              <div className="space-y-4">
                <div className="h-10 bg-linear-to-r from-slate-200 to-slate-300 rounded-lg w-3/4 animate-pulse relative overflow-hidden">
                  <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="h-6 bg-linear-to-r from-slate-200 to-slate-300 rounded w-32 animate-pulse relative overflow-hidden">
                    <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                  </div>
                  <div className="h-6 bg-linear-to-r from-slate-200 to-slate-300 rounded w-24 animate-pulse relative overflow-hidden">
                    <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                  </div>
                </div>

                <div className="h-12 bg-linear-to-r from-slate-200 to-slate-300 rounded-lg w-48 animate-pulse relative overflow-hidden">
                  <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="h-4 bg-linear-to-r from-slate-200 to-slate-300 rounded w-full animate-pulse relative overflow-hidden">
                  <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                </div>
                <div className="h-4 bg-linear-to-r from-slate-200 to-slate-300 rounded w-5/6 animate-pulse relative overflow-hidden">
                  <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                </div>
                <div className="h-4 bg-linear-to-r from-slate-200 to-slate-300 rounded w-4/6 animate-pulse relative overflow-hidden">
                  <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                </div>

                <div className="bg-slate-50 rounded-xl p-5 space-y-3 mt-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className="h-4 bg-linear-to-r from-slate-200 to-slate-300 rounded w-full animate-pulse relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="h-14 bg-linear-to-r from-slate-200 to-slate-300 rounded-xl w-36 animate-pulse relative overflow-hidden">
                  <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                </div>
                <div className="flex-1 h-14 bg-linear-to-r from-slate-200 to-slate-300 rounded-xl animate-pulse relative overflow-hidden">
                  <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-200">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="text-center space-y-2">
                    <div className="w-8 h-8 bg-linear-to-r from-slate-200 to-slate-300 rounded-full mx-auto animate-pulse relative overflow-hidden">
                      <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
                    </div>
                    <div className="h-4 bg-linear-to-r from-slate-200 to-slate-300 rounded w-24 mx-auto animate-pulse relative overflow-hidden">
                      <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
                    </div>
                    <div className="h-3 bg-linear-to-r from-slate-200 to-slate-300 rounded w-16 mx-auto animate-pulse relative overflow-hidden">
                      <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-slate-600 font-medium flex items-center justify-center gap-2">
            <Loader2 className="w-5 h-5 animate-spin" />
            Đang tải thông tin sản phẩm...
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </div>
  );
}
