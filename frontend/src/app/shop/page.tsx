'use client';

import React from 'react';
import { Header } from '@components/layout/Header';
import Image from 'next/image';

export default function Shop() {
  return (
    <>
      <Header />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-primary-900 mb-8 text-center">Shop</h1>
        
        {/* Coming Soon Banner */}
        <div className="mb-12 bg-gradient-to-r from-primary-100 to-primary-200 rounded-lg shadow-lg p-8 text-center">
          <h2 className="text-3xl font-semibold text-primary-800 mb-4">Coming Soon!</h2>
          <p className="text-primary-700 text-lg mb-6">
            Our online shop is currently under development. Sign up to be notified when we launch!
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-4 py-3 rounded-l-lg border border-primary-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <button className="px-6 py-3 bg-primary-600 text-white font-medium rounded-r-lg hover:bg-primary-700 transition-colors duration-300">
                Notify Me
              </button>
            </div>
          </div>
        </div>
        
        {/* Featured Products Preview */}
        <h2 className="text-2xl font-semibold text-primary-800 mb-6">Featured Artwork Preview</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Product 1 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="relative h-64 bg-primary-100">
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-24 h-24 text-primary-300" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm9 4a1 1 0 10-2 0v6a1 1 0 102 0V7zm-3 2a1 1 0 10-2 0v4a1 1 0 102 0V9zm-3 3a1 1 0 10-2 0v1a1 1 0 102 0v-1z"></path>
                </svg>
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-medium text-primary-900 mb-1">Sunset Dreams</h3>
              <p className="text-primary-600 text-sm mb-2">Acrylic on Canvas, 24" x 36"</p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold text-primary-800">$450</span>
                <button className="px-4 py-2 bg-primary-600 text-white text-sm rounded-lg hover:bg-primary-700 transition-colors duration-300">
                  Coming Soon
                </button>
              </div>
            </div>
          </div>
          
          {/* Product 2 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="relative h-64 bg-primary-100">
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-24 h-24 text-primary-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z" clipRule="evenodd"></path>
                </svg>
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-medium text-primary-900 mb-1">Ocean Whispers</h3>
              <p className="text-primary-600 text-sm mb-2">Watercolor, 18" x 24"</p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold text-primary-800">$325</span>
                <button className="px-4 py-2 bg-primary-600 text-white text-sm rounded-lg hover:bg-primary-700 transition-colors duration-300">
                  Coming Soon
                </button>
              </div>
            </div>
          </div>
          
          {/* Product 3 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="relative h-64 bg-primary-100">
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-24 h-24 text-primary-300" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path>
                </svg>
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-medium text-primary-900 mb-1">Abstract Journey</h3>
              <p className="text-primary-600 text-sm mb-2">Mixed Media, 30" x 30"</p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold text-primary-800">$550</span>
                <button className="px-4 py-2 bg-primary-600 text-white text-sm rounded-lg hover:bg-primary-700 transition-colors duration-300">
                  Coming Soon
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Services Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-primary-800 mb-6">Services Coming Soon</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6 transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <h3 className="text-xl font-medium text-primary-800 mb-3">Custom Commissions</h3>
              <p className="text-primary-700 mb-4">
                Have a specific vision in mind? We'll work closely with you to create a custom piece that perfectly captures your idea.
              </p>
              <div className="text-primary-600 font-medium">Starting at $600</div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <h3 className="text-xl font-medium text-primary-800 mb-3">Art Prints</h3>
              <p className="text-primary-700 mb-4">
                High-quality, archival prints of our most popular pieces. Perfect for bringing beautiful art into your home at an accessible price point.
              </p>
              <div className="text-primary-600 font-medium">Starting at $45</div>
            </div>
          </div>
        </div>
        
        {/* FAQ Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-primary-800 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium text-primary-800 mb-2">When will the shop launch?</h3>
              <p className="text-primary-700">We're aiming to launch our online shop in the coming months. Sign up for our newsletter to be the first to know!</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-primary-800 mb-2">Do you ship internationally?</h3>
              <p className="text-primary-700">Yes, we'll offer international shipping to most countries. Shipping costs will vary based on destination.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-primary-800 mb-2">Can I purchase original artwork?</h3>
              <p className="text-primary-700">Absolutely! Our shop will feature both original artwork and prints to suit different preferences and budgets.</p>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="text-center mt-12">
          <h2 className="text-2xl font-semibold text-primary-800 mb-4">Stay Updated</h2>
          <p className="text-primary-700 mb-6">
            Be the first to know when our shop launches with special early-bird discounts!
          </p>
          <button className="inline-flex items-center px-8 py-3 rounded-full bg-primary-600 text-white font-medium transition-all duration-300 hover:bg-primary-700 transform hover:-translate-y-1 hover:shadow-lg">
            Join Our Newsletter
          </button>
        </div>
      </div>
    </>
  );
} 