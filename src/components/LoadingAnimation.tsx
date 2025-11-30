import React, { useEffect, useState } from 'react';

interface LoadingAnimationProps {
  onComplete: () => void;
}

const LoadingAnimation: React.FC<LoadingAnimationProps> = ({ onComplete }) => {
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsComplete(true);
      setTimeout(onComplete, 300);
    }, 1800);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-50 bg-white dark:bg-slate-950 smooth-transition ${
      isComplete ? 'opacity-0 pointer-events-none' : 'opacity-100'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col">
        {/* Navbar Skeleton */}
        <div className="h-20 flex items-center justify-between py-4 border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-slate-200 to-slate-300 dark:from-slate-800 dark:to-slate-700 rounded-lg shimmer"></div>
            <div className="hidden sm:block w-32 h-6 bg-gradient-to-r from-slate-200 to-slate-300 dark:from-slate-800 dark:to-slate-700 rounded shimmer"></div>
          </div>
          <div className="w-8 h-8 bg-gradient-to-r from-slate-200 to-slate-300 dark:from-slate-800 dark:to-slate-700 rounded shimmer"></div>
        </div>

        {/* Hero Section Skeleton */}
        <div className="flex-1 flex items-center justify-center py-20">
          <div className="w-full max-w-3xl space-y-6">
            {/* Badge */}
            <div className="flex justify-center">
              <div className="w-48 h-8 bg-gradient-to-r from-slate-200 to-slate-300 dark:from-slate-800 dark:to-slate-700 rounded-full shimmer"></div>
            </div>

            {/* Main Title */}
            <div className="space-y-3">
              <div className="h-14 bg-gradient-to-r from-slate-200 to-slate-300 dark:from-slate-800 dark:to-slate-700 rounded-lg shimmer w-5/6 mx-auto"></div>
              <div className="h-14 bg-gradient-to-r from-slate-200 to-slate-300 dark:from-slate-800 dark:to-slate-700 rounded-lg shimmer w-4/5 mx-auto"></div>
            </div>

            {/* Description */}
            <div className="space-y-2 pt-4">
              <div className="h-5 bg-gradient-to-r from-slate-200 to-slate-300 dark:from-slate-800 dark:to-slate-700 rounded shimmer"></div>
              <div className="h-5 bg-gradient-to-r from-slate-200 to-slate-300 dark:from-slate-800 dark:to-slate-700 rounded shimmer w-5/6"></div>
            </div>

            {/* Tech Stack */}
            <div className="flex flex-wrap justify-center gap-3 pt-6">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-24 h-10 bg-gradient-to-r from-slate-200 to-slate-300 dark:from-slate-800 dark:to-slate-700 rounded-full shimmer"></div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap justify-center gap-4 pt-8">
              <div className="w-32 h-12 bg-gradient-to-r from-slate-200 to-slate-300 dark:from-slate-800 dark:to-slate-700 rounded-xl shimmer"></div>
              <div className="w-32 h-12 bg-gradient-to-r from-slate-200 to-slate-300 dark:from-slate-800 dark:to-slate-700 rounded-xl shimmer"></div>
              <div className="w-32 h-12 bg-gradient-to-r from-slate-200 to-slate-300 dark:from-slate-800 dark:to-slate-700 rounded-xl shimmer"></div>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-4 pt-6">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="w-12 h-12 bg-gradient-to-r from-slate-200 to-slate-300 dark:from-slate-800 dark:to-slate-700 rounded-xl shimmer"></div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }

        .shimmer {
          background-image: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0) 0,
            rgba(255, 255, 255, 0.2) 20%,
            rgba(255, 255, 255, 0.5) 60%,
            rgba(255, 255, 255, 0)
          );
          background-size: 1000px 100%;
          animation: shimmer 2s infinite;
        }

        .dark .shimmer {
          background-image: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0) 0,
            rgba(255, 255, 255, 0.1) 20%,
            rgba(255, 255, 255, 0.2) 60%,
            rgba(255, 255, 255, 0)
          );
        }
      `}</style>
    </div>
  );
};

export default LoadingAnimation;
