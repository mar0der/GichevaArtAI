'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { withAdminAuth } from '@/lib/context/AdminAuthContext';

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

function PaintingsManager() {
  const [paintings, setPaintings] = useState<Painting[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [categories, setCategories] = useState<string[]>([]);
  const [isDeleting, setIsDeleting] = useState(false);
  const [deleteId, setDeleteId] = useState<string | null>(null);

  const token = typeof window !== 'undefined' ? localStorage.getItem('adminToken') : null;

  // Fetch paintings
  useEffect(() => {
    const fetchPaintings = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/paintings`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch paintings');
        }
        
        const data = await response.json();
        setPaintings(data);
        
        // Extract unique categories
        const uniqueCategories = Array.from(new Set(data.map((p: Painting) => p.category).filter(Boolean)));
        setCategories(uniqueCategories as string[]);
      } catch (err) {
        console.error('Error fetching paintings:', err);
        setError('Failed to load paintings. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchPaintings();
  }, []);

  // Handle painting deletion
  const deletePainting = async (id: string) => {
    if (!token) {
      setError('You need to be logged in to delete paintings');
      return;
    }
    
    try {
      setIsDeleting(true);
      setDeleteId(id);
      
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/admin/paintings/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to delete painting');
      }
      
      // Remove the painting from the state
      setPaintings(paintings.filter(painting => painting.id !== id));
    } catch (err) {
      console.error('Error deleting painting:', err);
      setError('Failed to delete painting. Please try again.');
    } finally {
      setIsDeleting(false);
      setDeleteId(null);
    }
  };

  // Filter paintings based on search term and category
  const filteredPaintings = paintings.filter(painting => {
    const matchesSearch = searchTerm === '' || 
      painting.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (painting.description && painting.description.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === '' || painting.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  // Handle confirmation dialog for deletion
  const handleDeleteClick = (id: string) => {
    if (window.confirm('Are you sure you want to delete this painting? This action cannot be undone.')) {
      deletePainting(id);
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
        <p className="font-bold">Error</p>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-serif font-bold text-gray-900">Manage Paintings</h1>
        <Link 
          href="/admin/paintings/new" 
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700"
        >
          Add New Painting
        </Link>
      </div>
      
      {/* Filters */}
      <div className="bg-white p-4 shadow rounded-lg mb-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div>
            <label htmlFor="search" className="block text-sm font-medium text-gray-700">Search</label>
            <input
              type="text"
              name="search"
              id="search"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
              placeholder="Search by title or description"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-700">Filter by Category</label>
            <select
              id="category"
              name="category"
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-md"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="">All Categories</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
          
          <div className="flex items-end">
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('');
              }}
              className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
            >
              Clear Filters
            </button>
          </div>
        </div>
      </div>
      
      {/* Paintings List */}
      <div className="bg-white shadow overflow-hidden sm:rounded-md">
        {filteredPaintings.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-gray-500">No paintings found matching your filters.</p>
          </div>
        ) : (
          <ul className="divide-y divide-gray-200">
            {filteredPaintings.map((painting) => (
              <li key={painting.id}>
                <div className="flex items-center px-4 py-4 sm:px-6">
                  <div className="min-w-0 flex-1 flex items-center">
                    <div className="flex-shrink-0 h-16 w-16 bg-gray-100 rounded overflow-hidden">
                      {painting.imageUrl ? (
                        <img 
                          src={painting.imageUrl} 
                          alt={painting.title} 
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <div className="h-full w-full flex items-center justify-center">
                          <span className="text-gray-400 text-xs">No image</span>
                        </div>
                      )}
                    </div>
                    <div className="min-w-0 flex-1 px-4">
                      <div>
                        <p className="text-sm font-medium text-primary-600 truncate">{painting.title}</p>
                        <p className="mt-1 flex items-center text-sm text-gray-500">
                          <span className="truncate">{painting.category} | {painting.medium}</span>
                        </p>
                        <p className="mt-1 flex items-center text-sm text-gray-500">
                          <span className="truncate">${painting.price} | {painting.available ? 'Available' : 'Sold'}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Link
                      href={`/admin/paintings/edit/${painting.id}`}
                      className="inline-flex items-center px-3 py-1 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                    >
                      Edit
                    </Link>
                    <button
                      type="button"
                      onClick={() => handleDeleteClick(painting.id)}
                      disabled={isDeleting && deleteId === painting.id}
                      className={`inline-flex items-center px-3 py-1 border border-transparent text-sm leading-4 font-medium rounded-md text-white ${
                        isDeleting && deleteId === painting.id 
                          ? 'bg-red-300 cursor-not-allowed' 
                          : 'bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500'
                      }`}
                    >
                      {isDeleting && deleteId === painting.id ? 'Deleting...' : 'Delete'}
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default withAdminAuth(PaintingsManager); 