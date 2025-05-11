import React from "react";

const StatsCardSkeleton = () => (
  <div className="animate-pulse bg-white rounded-2xl shadow-sm p-6 w-full">
    <div className="h-8 bg-gray-200 rounded w-1/2 mb-4" />
    <div className="h-6 bg-gray-200 rounded w-1/3 mb-6" />
    <div className="h-4 bg-gray-100 rounded w-1/4 mb-2" />
    <div className="h-12 bg-gray-100 rounded w-full mb-4" />
    <div className="h-12 bg-gray-100 rounded w-full" />
  </div>
);

export default StatsCardSkeleton;
