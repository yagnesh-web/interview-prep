import React from 'react';

const shimmerStyle = {
  backgroundImage:
    'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0) 100%)',
  backgroundSize: '200% 100%',
  animation: 'shimmer 1.5s infinite',
};

const SkeletonBox = ({ className = '' }) => (
  <div
    className={`relative overflow-hidden bg-gray-300 dark:bg-gray-700 rounded ${className}`}
    style={shimmerStyle}
  />
);

const SkeletonLoader = () => {
  return (
    <>
      {/* First block */}
      <div className="p-4 space-y-4">
        <div className="space-y-2">
          <SkeletonBox className="h-6 w-3/4" />
          <SkeletonBox className="h-4 w-1/2" />
          <SkeletonBox className="h-4 w-full" />
          <SkeletonBox className="h-4 w-5/6" />
        </div>
        <div className="space-y-2">
          <SkeletonBox className="h-4 w-1/3" />
          <SkeletonBox className="h-4 w-1/2" />
          <SkeletonBox className="h-4 w-full" />
        </div>
      </div>

      {/* Main block */}
      <div className="p-4 space-y-6">
        <SkeletonBox className="h-6 w-1/2" />

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <SkeletonBox className="h-4 w-full" />
            <SkeletonBox className="h-4 w-5/6" />
            <SkeletonBox className="h-4 w-2/3" />
            <SkeletonBox className="h-4 w-1/2" />
          </div>
          <div className="space-y-2">
            <SkeletonBox className="h-4 w-full" />
            <SkeletonBox className="h-4 w-3/4" />
            <SkeletonBox className="h-4 w-2/3" />
            <SkeletonBox className="h-4 w-1/3" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <SkeletonBox className="h-4 w-1/2" />
          <SkeletonBox className="h-4 w-1/4" />
        </div>

        <SkeletonBox className="h-48 w-full rounded-lg" />

        <div className="grid grid-cols-2 gap-4">
          <SkeletonBox className="h-4 w-full" />
          <SkeletonBox className="h-4 w-3/4" />
          <SkeletonBox className="h-4 w-2/3" />
          <SkeletonBox className="h-4 w-1/2" />
        </div>
      </div>

      {/* Shimmer animation keyframes */}
      <style>{`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>
    </>
  );
};

export default SkeletonLoader;
