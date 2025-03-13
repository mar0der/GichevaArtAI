'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { withAdminAuth } from '@/lib/context/AdminAuthContext';

function AdminDashboard() {
  const [stats, setStats] = useState({
    paintingsCount: 0,
    categoriesCount: 0,
    availablePaintings: 0,
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        setIsLoading(true);
        
        // Fetch paintings for stats
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/paintings`);
        const paintings = await response.json();
        
        if (!response.ok) {
          throw new Error('Failed to fetch paintings');
        }
        
        // Get unique categories
        const categoriesSet = new Set<string>();
        paintings.forEach((painting: any) => {
          if (painting.category) {
            categoriesSet.add(painting.category);
          }
        });
        
        // Count available paintings
        const availablePaintings = paintings.filter((painting: any) => painting.available).length;
        
        setStats({
          paintingsCount: paintings.length,
          categoriesCount: categoriesSet.size,
          availablePaintings,
        });
      } catch (error) {
        console.error('Error fetching dashboard stats:', error);
        setError('Failed to load dashboard statistics');
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchStats();
  }, []);

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
        <h1 className="text-2xl font-serif font-bold text-gray-900">Admin Dashboard</h1>
        <Link 
          href="/admin/paintings" 
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700"
        >
          Manage Paintings
        </Link>
      </div>
      
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
        {/* Stats cards */}
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <dl>
              <dt className="text-sm font-medium text-gray-500 truncate">Total Paintings</dt>
              <dd className="mt-1 text-3xl font-semibold text-gray-900">{stats.paintingsCount}</dd>
            </dl>
          </div>
        </div>
        
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <dl>
              <dt className="text-sm font-medium text-gray-500 truncate">Categories</dt>
              <dd className="mt-1 text-3xl font-semibold text-gray-900">{stats.categoriesCount}</dd>
            </dl>
          </div>
        </div>
        
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <dl>
              <dt className="text-sm font-medium text-gray-500 truncate">Available Paintings</dt>
              <dd className="mt-1 text-3xl font-semibold text-gray-900">{stats.availablePaintings}</dd>
            </dl>
          </div>
        </div>
      </div>
      
      <div className="mt-8 bg-white shadow rounded-lg p-6">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Quick Actions</h2>
        <div className="space-y-4">
          <Link
            href="/admin/paintings"
            className="block p-4 border border-gray-200 rounded-md hover:bg-gray-50"
          >
            <h3 className="text-md font-medium text-gray-900">Manage Paintings</h3>
            <p className="mt-1 text-sm text-gray-500">Add, edit, or remove paintings from your gallery</p>
          </Link>
          
          <Link
            href="/admin/paintings/new"
            className="block p-4 border border-gray-200 rounded-md hover:bg-gray-50"
          >
            <h3 className="text-md font-medium text-gray-900">Add New Painting</h3>
            <p className="mt-1 text-sm text-gray-500">Create a new painting entry in your gallery</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default withAdminAuth(AdminDashboard); 