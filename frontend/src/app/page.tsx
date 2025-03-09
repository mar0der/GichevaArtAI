'use client';
import { Header } from '@/components/header';
import ErrorDisplay from '../components/ErrorDisplay';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

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
  saatchiLink: string;
  available: boolean;
  createdAt: string;
}

// Client component for the gallery
export default function Home() {
  const [paintings, setPaintings] = useState<Painting[]>([]);
  const [filteredPaintings, setFilteredPaintings] = useState<Painting[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [availableOnly, setAvailableOnly] = useState<boolean>(false);
  const [sortOption, setSortOption] = useState<string>('title');
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
        setFilteredPaintings(data);
        
        // Extract unique categories from paintings
        const uniqueCategories = Array.from(new Set(data.map((painting: Painting) => painting.category))).filter(Boolean);
        setCategories(uniqueCategories as string[]);
        
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

  // Filter and sort paintings when filter options change
  useEffect(() => {
    let result = [...paintings];
    
    // Apply category filter
    if (selectedCategory) {
      result = result.filter(painting => painting.category === selectedCategory);
    }
    
    // Apply availability filter
    if (availableOnly) {
      result = result.filter(painting => painting.available);
    }
    
    // Apply sorting
    if (sortOption === 'price_asc') {
      result.sort((a, b) => (a.price || 0) - (b.price || 0));
    } else if (sortOption === 'price_desc') {
      result.sort((a, b) => (b.price || 0) - (a.price || 0));
    } else {
      // Default: sort by title
      result.sort((a, b) => a.title.localeCompare(b.title));
    }
    
    setFilteredPaintings(result);
  }, [paintings, selectedCategory, availableOnly, sortOption]);

  if (isLoading) {
    return (
      <>
        <Header />
        <div className="flex flex-col items-center justify-center min-h-screen">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-accent"></div>
          <p className="mt-4 text-gray-600">Loading Radka Gicheva's artwork...</p>
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
      <div className="flex flex-col items-center min-h-screen py-2">
        <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-8">
            <h1 className="text-4xl font-bold mb-4">
              <span className="text-accent">Radka Gicheva</span> Art Gallery
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Explore a collection of original paintings and drawings by Radka Gicheva,
              featuring a diverse range of styles from abstract to figurative art.
            </p>
          </div>
          
          {/* Filters */}
          <div className="mb-8 bg-gray-50 p-4 rounded-lg">
            <div className="flex flex-col md:flex-row gap-4 justify-between">
              <div className="flex flex-col sm:flex-row gap-4">
                <div>
                  <label htmlFor="category-filter" className="block text-sm font-medium text-gray-700 mb-1">
                    Filter by Category
                  </label>
                  <select
                    id="category-filter"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-accent focus:border-accent"
                  >
                    <option value="">All Categories</option>
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label htmlFor="sort-option" className="block text-sm font-medium text-gray-700 mb-1">
                    Sort By
                  </label>
                  <select
                    id="sort-option"
                    value={sortOption}
                    onChange={(e) => setSortOption(e.target.value)}
                    className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-accent focus:border-accent"
                  >
                    <option value="title">Title (A-Z)</option>
                    <option value="price_asc">Price (Low to High)</option>
                    <option value="price_desc">Price (High to Low)</option>
                  </select>
                </div>
              </div>
              
              <div className="flex items-center">
                <input
                  id="available-only"
                  type="checkbox"
                  checked={availableOnly}
                  onChange={(e) => setAvailableOnly(e.target.checked)}
                  className="h-4 w-4 text-accent focus:ring-accent border-gray-300 rounded"
                />
                <label htmlFor="available-only" className="ml-2 block text-sm text-gray-700">
                  Show Available Only
                </label>
              </div>
            </div>
            
            <div className="mt-4 text-sm text-gray-600">
              Showing {filteredPaintings.length} of {paintings.length} artworks
            </div>
          </div>
          
          {filteredPaintings.length === 0 ? (
            <div className="text-center p-12 bg-gray-50 rounded-lg">
              <p className="text-xl text-gray-600">No paintings match your current filters.</p>
              <button 
                onClick={() => {
                  setSelectedCategory('');
                  setAvailableOnly(false);
                  setSortOption('title');
                }}
                className="mt-4 px-4 py-2 bg-accent text-white rounded hover:bg-accent/90"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {filteredPaintings.map((painting) => (
                <div 
                  key={painting.id}
                  className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="aspect-w-4 aspect-h-3 w-full overflow-hidden bg-gray-200 relative">
                    {painting.imageUrl ? (
                      <img
                        src={painting.imageUrl}
                        alt={painting.title}
                        className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-64 flex items-center justify-center bg-gray-100">
                        <p className="text-gray-400">No image available</p>
                      </div>
                    )}
                    {!painting.available && (
                      <div className="absolute top-0 right-0 bg-red-500 text-white text-xs uppercase font-bold px-3 py-1 m-2 rounded">
                        Sold
                      </div>
                    )}
                  </div>
                  
                  <div className="p-5">
                    <h2 className="text-xl font-bold text-gray-900 mb-1">{painting.title}</h2>
                    <p className="text-sm text-gray-600 mb-3">{painting.category}</p>
                    
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <p className="text-sm text-gray-500">{painting.medium}</p>
                        <p className="text-sm text-gray-500">{painting.dimensions}</p>
                      </div>
                      {painting.price > 0 && (
                        <p className="text-lg font-bold text-accent">
                          ${painting.price.toLocaleString()}
                        </p>
                      )}
                    </div>
                    
                    <p className="text-gray-700 text-sm line-clamp-3 mb-4">
                      {painting.description || "No description available."}
                    </p>
                    
                    {painting.saatchiLink && (
                      <a 
                        href={painting.saatchiLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:text-accent/80 font-medium inline-flex items-center"
                      >
                        View on Saatchi Art
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
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
      <p className="mt-4 text-gray-600">Loading Radka Gicheva's artwork...</p>
    </div>
  );
}