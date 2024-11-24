import React from "react";

const LoadingPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-pink-50">
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 border-4 border-pink-300 border-t-pink-500 rounded-full animate-spin"></div>
        <p className="text-pink-600 text-lg font-semibold mt-4">Loading...</p>
      </div>
    </div>
  );
};

export default LoadingPage;
