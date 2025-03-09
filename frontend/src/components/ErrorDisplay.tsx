'use client';

interface ErrorDisplayProps {
  message: string;
  apiUrl: string;
}

export default function ErrorDisplay({ message, apiUrl }: ErrorDisplayProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-2xl w-full text-center">
        <h2 className="text-2xl font-bold text-red-600 mb-4">Unable to Load Paintings</h2>
        <p className="text-gray-600 mb-4">{message}</p>
        <p className="text-sm text-gray-500">Please ensure the backend server is running at {apiUrl}</p>
        <button 
          onClick={() => window.location.reload()} 
          className="mt-4 px-4 py-2 bg-accent text-white rounded hover:bg-accent/90"
        >
          Try Again
        </button>
      </div>
    </div>
  );
} 