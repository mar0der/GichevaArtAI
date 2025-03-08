'use client';

import React from 'react';
import { Header } from '@/components/header';

export default function SocialMedia() {
  return (
    <>
      <Header />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-primary-900 mb-8">Follow Us on Social Media</h1>
        <p className="text-primary-700 mb-4">Stay connected with us through our Instagram:</p>
        <ul className="space-y-4">
          <li>
            <a 
              href="https://www.instagram.com/gicheva.art/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center text-primary-500 hover:text-primary-700"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6 mr-2" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M16 8a6 6 0 10-8 0 6 6 0 008 0zM12 12v.01M21 12.5c0 4.28-3.58 7.5-8 7.5S5 16.78 5 12.5 8.58 5 12 5s9 3.22 9 7.5z" 
                />
              </svg>
              Instagram
            </a>
          </li>
        </ul>
      </div>
    </>
  );
} 