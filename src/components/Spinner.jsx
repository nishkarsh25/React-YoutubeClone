import React from 'react';

export default function Spinner() {
  return (
    <div className="flex items-center justify-center w-full">
      <div className="w-16 h-16 border-4 border-blue-500 border-solid rounded-full animate-spin">
        {/* You can customize the spinner here */}
        <div className="w-8 h-8 border-4 border-blue-500 border-solid rounded-full"></div>
      </div>
    </div>
  );
}
