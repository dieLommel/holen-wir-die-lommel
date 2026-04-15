"use client";

import { Suspense, lazy } from 'react';

const Spline = lazy(() => import('@splinetool/react-spline'));

interface SplineSceneProps {
  scene: string;
  className?: string;
  fallback?: React.ReactNode;
}

export function SplineScene({ scene, className, fallback }: SplineSceneProps) {
  return (
    <Suspense
      fallback={
        fallback || (
          <div className={`flex items-center justify-center bg-transparent ${className}`}>
            <div className="w-6 h-6 border-2 border-slate/20 border-t-slate rounded-full animate-spin" />
          </div>
        )
      }
    >
      <Spline scene={scene} className={className} />
    </Suspense>
  );
}
