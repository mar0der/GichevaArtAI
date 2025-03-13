'use client';

import { useState, useEffect, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { withAdminAuth } from '@/lib/context/AdminAuthContext';

// Define painting form interface
interface PaintingFormData {
  id: string;
  title: string;
  description: string;
  price: string; // Using string for form input, will convert to number on submit
  dimensions: string;
  medium: string;
  category: string;
  imageUrl: string;
  saatchiLink: string;
  available: boolean;
}

// Initial state for form
const initialFormData: PaintingFormData = {
  id: '',
  title: '',
  description: '',
  price: '',
  dimensions: '',
  medium: '',
  category: '',
  imageUrl: '',
  saatchiLink: '',
  available: true,
};

function NewPainting() {
  const [formData, setFormData] = useState<PaintingFormData>(initialFormData);
  const [existingCategories, setExistingCategories] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [nextId, setNextId] = useState<number>(0);
  const router = useRouter();

  // Get token from localStorage
  const token = typeof window !== 'undefined' ? localStorage.getItem('adminToken') : null;

  // Fetch existing categories and get the next ID
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch categories
        const categoriesResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/categories`);
        
        if (!categoriesResponse.ok) {
          throw new Error('Failed to fetch categories');
        }
        
        const categories = await categoriesResponse.json();
        setExistingCategories(categories);
        
        // Fetch all paintings to determine the next ID
        const paintingsResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/paintings`);
        
        if (!paintingsResponse.ok) {
          throw new Error('Failed to fetch paintings');
        }
        
        const paintings = await paintingsResponse.json();
        
        // Find the highest ID
        let highestId = 0;
        paintings.forEach((painting: any) => {
          const paintingId = parseInt(painting.id);
          if (!isNaN(paintingId) && paintingId > highestId) {
            highestId = paintingId;
          }
        });
        
        // Set the next ID
        setNextId(highestId + 1);
        setFormData(prev => ({
          ...prev,
          id: String(highestId + 1)
        }));
        
        console.log(`Highest existing ID: ${highestId}, Next ID: ${highestId + 1}`);
      } catch (err) {
        console.error('Error fetching data:', err);
      }
    };
    
    fetchData();
  }, []);

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle checkbox changes separately
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      [name]: checked,
    });
  };

  // Handle form submission
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!token) {
      setError('Authentication required. Please log in again.');
      return;
    }
    
    try {
      setIsSubmitting(true);
      setError(null);
      
      // Use the consecutive ID
      const paintingData = {
        ...formData,
        id: formData.id || String(nextId), // Use consecutive ID
        price: formData.price ? parseFloat(formData.price) : 0,
      };
      
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/admin/paintings`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(paintingData),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to add painting');
      }
      
      setSuccess(true);
      
      // Clear form or redirect
      setTimeout(() => {
        router.push('/admin/paintings');
      }, 1500);
    } catch (err) {
      console.error('Error adding painting:', err);
      setError(err instanceof Error ? err.message : 'An error occurred while adding the painting');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-serif font-bold text-gray-900">Add New Painting</h1>
        <Link
          href="/admin/paintings"
          className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
        >
          Cancel
        </Link>
      </div>
      
      {error && (
        <div className="mb-6 bg-red-50 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
          <span className="block sm:inline">{error}</span>
        </div>
      )}
      
      {success && (
        <div className="mb-6 bg-green-50 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
          <span className="block sm:inline">Painting added successfully! Redirecting...</span>
        </div>
      )}
      
      <div className="bg-white shadow overflow-hidden sm:rounded-md">
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
            {/* ID */}
            <div className="sm:col-span-2">
              <label htmlFor="id" className="block text-sm font-medium text-gray-700">
                Painting ID (Auto-generated)
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="id"
                  id="id"
                  value={formData.id}
                  onChange={handleChange}
                  readOnly
                  className="bg-gray-100 shadow-sm focus:ring-primary-500 focus:border-primary-500 block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>
              <p className="mt-2 text-sm text-gray-500">ID is automatically generated as next number in sequence</p>
            </div>
            
            {/* Title */}
            <div className="sm:col-span-4">
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                Title *
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="title"
                  id="title"
                  required
                  value={formData.title}
                  onChange={handleChange}
                  className="block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>
            
            {/* Description */}
            <div className="sm:col-span-6">
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <div className="mt-1">
                <textarea
                  id="description"
                  name="description"
                  rows={3}
                  value={formData.description}
                  onChange={handleChange}
                  className="block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md"
                />
              </div>
              <p className="mt-2 text-sm text-gray-500">Brief description of the artwork</p>
            </div>
            
            {/* Category */}
            <div className="sm:col-span-3">
              <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                Category *
              </label>
              <div className="mt-1">
                <select
                  id="category"
                  name="category"
                  required
                  value={formData.category}
                  onChange={handleChange}
                  className="shadow-sm focus:ring-primary-500 focus:border-primary-500 block w-full sm:text-sm border-gray-300 rounded-md"
                >
                  <option value="">Select a category</option>
                  {existingCategories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                  <option value="other">Other (Add New)</option>
                </select>
              </div>
              {formData.category === 'other' && (
                <div className="mt-2">
                  <input
                    type="text"
                    name="category"
                    placeholder="Enter new category"
                    onChange={handleChange}
                    className="shadow-sm focus:ring-primary-500 focus:border-primary-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              )}
            </div>
            
            {/* Medium */}
            <div className="sm:col-span-3">
              <label htmlFor="medium" className="block text-sm font-medium text-gray-700">
                Medium *
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="medium"
                  id="medium"
                  required
                  value={formData.medium}
                  onChange={handleChange}
                  className="shadow-sm focus:ring-primary-500 focus:border-primary-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  placeholder="e.g., Acrylic on Canvas"
                />
              </div>
            </div>
            
            {/* Price */}
            <div className="sm:col-span-2">
              <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                Price
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-gray-500 sm:text-sm">$</span>
                </div>
                <input
                  type="number"
                  name="price"
                  id="price"
                  min="0"
                  step="0.01"
                  value={formData.price}
                  onChange={handleChange}
                  className="focus:ring-primary-500 focus:border-primary-500 block w-full pl-7 sm:text-sm border-gray-300 rounded-md"
                  placeholder="0.00"
                />
              </div>
            </div>
            
            {/* Dimensions */}
            <div className="sm:col-span-2">
              <label htmlFor="dimensions" className="block text-sm font-medium text-gray-700">
                Dimensions
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="dimensions"
                  id="dimensions"
                  value={formData.dimensions}
                  onChange={handleChange}
                  className="shadow-sm focus:ring-primary-500 focus:border-primary-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  placeholder="e.g., 24 W x 36 H x 1.5 D"
                />
              </div>
            </div>
            
            {/* Available */}
            <div className="sm:col-span-2">
              <div className="flex items-start pt-5">
                <div className="flex items-center h-5">
                  <input
                    id="available"
                    name="available"
                    type="checkbox"
                    checked={formData.available}
                    onChange={handleCheckboxChange}
                    className="focus:ring-primary-500 h-4 w-4 text-primary-600 border-gray-300 rounded"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="available" className="font-medium text-gray-700">
                    Available for Sale
                  </label>
                  <p className="text-gray-500">Uncheck if the painting is sold</p>
                </div>
              </div>
            </div>
            
            {/* Image URL */}
            <div className="sm:col-span-6">
              <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700">
                Image URL
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="imageUrl"
                  id="imageUrl"
                  value={formData.imageUrl}
                  onChange={handleChange}
                  className="shadow-sm focus:ring-primary-500 focus:border-primary-500 block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>
              <p className="mt-2 text-sm text-gray-500">Enter a URL for the painting image</p>
            </div>
            
            {/* Saatchi Link */}
            <div className="sm:col-span-6">
              <label htmlFor="saatchiLink" className="block text-sm font-medium text-gray-700">
                Saatchi Art Link
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="saatchiLink"
                  id="saatchiLink"
                  value={formData.saatchiLink}
                  onChange={handleChange}
                  className="shadow-sm focus:ring-primary-500 focus:border-primary-500 block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>
              <p className="mt-2 text-sm text-gray-500">Link to the painting on Saatchi Art (if applicable)</p>
            </div>
          </div>
          
          <div className="pt-5">
            <div className="flex justify-end">
              <Link
                href="/admin/paintings"
                className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                Cancel
              </Link>
              <button
                type="submit"
                disabled={isSubmitting}
                className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Saving...' : 'Save Painting'}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default withAdminAuth(NewPainting); 