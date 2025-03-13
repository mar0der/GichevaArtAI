'use client';

import { useState, useEffect, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { withAdminAuth } from '@/lib/context/AdminAuthContext';

// Define painting form interface
interface PaintingFormData {
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

function EditPainting({ params }: { params: { id: string } }) {
  const { id } = params;
  const [formData, setFormData] = useState<PaintingFormData>(initialFormData);
  const [existingCategories, setExistingCategories] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  // Get token from localStorage
  const token = typeof window !== 'undefined' ? localStorage.getItem('adminToken') : null;

  // Fetch painting data and categories
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        
        // Fetch the painting data
        const paintingResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/paintings/${id}`);
        
        if (!paintingResponse.ok) {
          throw new Error('Failed to fetch painting');
        }
        
        const paintingData = await paintingResponse.json();
        
        // Fetch categories
        const categoriesResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/categories`);
        
        if (!categoriesResponse.ok) {
          throw new Error('Failed to fetch categories');
        }
        
        const categories = await categoriesResponse.json();
        setExistingCategories(categories);
        
        // Format the data for the form
        setFormData({
          title: paintingData.title || '',
          description: paintingData.description || '',
          price: paintingData.price?.toString() || '',
          dimensions: paintingData.dimensions || '',
          medium: paintingData.medium || '',
          category: paintingData.category || '',
          imageUrl: paintingData.imageUrl || '',
          saatchiLink: paintingData.saatchiLink || '',
          available: paintingData.available === undefined ? true : paintingData.available,
        });
      } catch (err) {
        console.error('Error fetching data:', err);
        setError('Failed to load painting data. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchData();
  }, [id]);

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
      
      // Convert price to number and format the data for API
      const paintingData = {
        ...formData,
        price: formData.price ? parseFloat(formData.price) : 0,
      };
      
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/admin/paintings/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(paintingData),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to update painting');
      }
      
      setSuccess(true);
      
      // Redirect after a short delay
      setTimeout(() => {
        router.push('/admin/paintings');
      }, 1500);
    } catch (err) {
      console.error('Error updating painting:', err);
      setError(err instanceof Error ? err.message : 'An error occurred while updating the painting');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500"></div>
      </div>
    );
  }

  if (error && !isSubmitting) {
    return (
      <div className="bg-red-50 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
        <p className="font-bold">Error</p>
        <p>{error}</p>
        <div className="mt-4">
          <Link href="/admin/paintings" className="text-red-700 underline">
            Return to paintings
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-serif font-bold text-gray-900">Edit Painting</h1>
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
          <span className="block sm:inline">Painting updated successfully! Redirecting...</span>
        </div>
      )}
      
      <div className="bg-white shadow overflow-hidden sm:rounded-md">
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
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
            
            {/* Preview current image if available */}
            {formData.imageUrl && (
              <div className="sm:col-span-6">
                <label className="block text-sm font-medium text-gray-700">Current Image</label>
                <div className="mt-2 relative h-64 border border-gray-300 rounded-md overflow-hidden">
                  <img
                    src={formData.imageUrl}
                    alt={formData.title}
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.src = 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22318%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20318%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_158bd1d28ef%20text%20%7B%20fill%3A%23868e96%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A16pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_158bd1d28ef%22%3E%3Crect%20width%3D%22318%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22129.359375%22%20y%3D%2297.35%22%3EImage%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E';
                    }}
                  />
                </div>
              </div>
            )}
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
                {isSubmitting ? 'Saving...' : 'Update Painting'}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default withAdminAuth(EditPainting); 