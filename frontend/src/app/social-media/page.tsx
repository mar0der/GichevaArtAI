'use client';

import React, { useEffect } from 'react';
import { Header } from '@/components/header';
import Image from 'next/image';

export default function SocialMedia() {
  // Function to load Instagram embed script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//www.instagram.com/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <Header />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-primary-900 mb-8 text-center">Connect With Us</h1>
        
        {/* Instagram Profile Section */}
        <div className="mb-12 bg-white rounded-lg shadow-lg p-6 transform transition-all duration-300 hover:shadow-xl">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h2 className="text-2xl font-semibold text-primary-800 mb-4">Follow Our Journey</h2>
              <p className="text-primary-700 mb-6">
                Stay connected with Gicheva Art through Instagram. Follow us for the latest artwork, 
                behind-the-scenes content, and special announcements.
              </p>
              <a 
                href="https://www.instagram.com/gicheva.art/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium transition-all duration-300 hover:from-purple-600 hover:to-pink-600 transform hover:-translate-y-1"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24"
                  fill="white"
                  className="mr-3"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                @gicheva.art
              </a>
            </div>
            <div className="w-full md:w-64 h-64 relative rounded-lg overflow-hidden shadow-md bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-pink-100 transform transition-transform duration-500 hover:scale-105">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="64" 
                    height="64" 
                    viewBox="0 0 24 24"
                    fill="rgba(156, 39, 176, 0.7)"
                    className="transition-all duration-300 hover:scale-110"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <div className="mt-4 text-primary-800 font-medium text-center absolute bottom-4 left-0 right-0">
                    Gicheva Art
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Instagram Feed Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-primary-800 mb-6 text-center">Latest From Instagram</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Instagram Post Embed */}
            <div className="instagram-post bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <blockquote
                className="instagram-media w-full"
                data-instgrm-permalink="https://www.instagram.com/p/CvZXD1MNbcA/?utm_source=ig_embed"
                data-instgrm-version="14"
                style={{ 
                  maxWidth: '540px',
                  width: '100%',
                  margin: '0 auto'
                }}
              >
                <div style={{ padding: '16px' }}>
                  <a 
                    href="https://www.instagram.com/p/CvZXD1MNbcA/?utm_source=ig_embed" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ 
                      display: 'flex',
                      alignItems: 'center',
                      textDecoration: 'none'
                    }}
                  >
                    <div style={{ width: '100%', textAlign: 'center' }}>
                      <p className="text-primary-600">View this post on Instagram</p>
                    </div>
                  </a>
                </div>
              </blockquote>
            </div>

            {/* Generic Instagram Feed Container */}
            <div className="instagram-feed-container bg-white rounded-lg shadow-md p-6 transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <h3 className="text-xl font-medium text-primary-800 mb-4">Why Follow Us?</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Exclusive behind-the-scenes content</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>First looks at new artwork</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Special promotions and giveaways</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Join our creative community</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <p className="text-primary-700 mb-6">
            Don't miss out on updates and exclusive content!
          </p>
          <a 
            href="https://www.instagram.com/gicheva.art/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center px-8 py-3 rounded-full bg-primary-600 text-white font-medium transition-all duration-300 hover:bg-primary-700 transform hover:-translate-y-1 hover:shadow-lg"
          >
            Follow @gicheva.art
          </a>
        </div>
      </div>
    </>
  );
} 