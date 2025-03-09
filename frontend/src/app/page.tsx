'use client';
import { Header } from '@/components/header';
import ErrorDisplay from '../components/ErrorDisplay';
import { useState, useEffect } from 'react';

// Types for our painting data
interface Painting {
  id: string;
  title: string;
  description: string;
  price: number;
  dimensions: string;
  medium: string;
  category: string;
  imageUrl: string;
  available: boolean;
  createdAt: string;
}

// Client component for the gallery
export default function Home() {
  const [paintings, setPaintings] = useState<Painting[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPaintings() {
      try {
        setIsLoading(true);
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
        console.log('Fetching from API (client-side):', apiUrl);
        
        // Client-side request with timestamp for cache busting
        const timestamp = new Date().getTime();
        const res = await fetch(`${apiUrl}/api/paintings?t=${timestamp}`, {
          cache: 'no-store',
          headers: { 'Accept': 'application/json' }
        });
        
        if (!res.ok) {
          throw new Error(`API request failed with status ${res.status}`);
        }
        
        const data = await res.json();
        console.log('Successfully fetched data from API');
        setPaintings(data);
        setError(null);
      } catch (error) {
        console.error('Fetch error:', error);
        setError(error instanceof Error ? error.message : 'Failed to fetch paintings');
      } finally {
        setIsLoading(false);
      }
    }

    fetchPaintings();
  }, []);

  if (isLoading) {
    return (
      <>
        <Header />
        <div className="flex flex-col items-center justify-center min-h-screen">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-accent"></div>
          <p className="mt-4 text-gray-600">Loading paintings from database...</p>
        </div>
      </>
    );
  }

  if (error) {
    return (
      <>
        <Header />
        <div className="flex flex-col items-center justify-center min-h-screen p-4">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-2xl w-full text-center">
            <h2 className="text-2xl font-bold text-red-600 mb-4">Unable to Load Paintings</h2>
            <p className="text-gray-600 mb-4">{error}</p>
            <p className="text-sm text-gray-500">Please ensure the backend server is running at {process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}</p>
            <button 
              onClick={() => window.location.reload()} 
              className="mt-4 px-4 py-2 bg-accent text-white rounded hover:bg-accent/90"
            >
              Try Again
            </button>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <main className="flex flex-col items-center justify-center flex-1 px-4 sm:px-20 text-center">
          <h1 className="text-4xl font-bold mt-20 mb-8">
            Welcome to <span className="text-accent">Gicheva Art</span>
          </h1>
          <p className="text-xl mb-8">
            Fine art gallery showcasing original paintings
          </p>
          {paintings.length === 0 ? (
            <div className="text-center p-8">
              <p className="text-xl text-gray-600">No paintings available at the moment.</p>
              <p className="text-sm text-gray-500 mt-2">Please check the database connection.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
              {paintings.map((painting) => (
                <div 
                  key={painting.id}
                  className="bg-primary-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <div 
                    className="h-48 bg-primary-200 rounded-md mb-4 bg-cover bg-center"
                    style={{ 
                      backgroundImage: painting.imageUrl ? `url(${painting.imageUrl})` : 'none',
                      backgroundColor: !painting.imageUrl ? '#f3f4f6' : undefined
                    }}
                  />
                  <h2 className="text-xl font-semibold">{painting.title}</h2>
                  <p className="text-primary-700">{painting.category}</p>
                  <p className="mt-2">${painting.price.toLocaleString()}</p>
                  <p className="text-sm text-gray-600 mt-2">{painting.medium}</p>
                  <p className="text-sm text-gray-600">{painting.dimensions}</p>
                  <div className="mt-3 pt-3 border-t border-gray-200">
                    <p className="text-sm text-gray-700 line-clamp-3">
                      {painting.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </main>
      </div>
    </>
  );
}

// Ensure fresh data on each page load
export const dynamic = 'force-dynamic';
export const revalidate = 0;

// Add loading state component
export function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-accent"></div>
      <p className="mt-4 text-gray-600">Loading paintings from database...</p>
    </div>
  );
}