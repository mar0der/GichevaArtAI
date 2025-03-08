'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="font-serif text-2xl font-bold text-primary-900">
                Gicheva Art
              </Link>
            </div>
            <nav className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link 
                href="/" 
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  pathname === '/' 
                    ? 'border-accent text-primary-900'
                    : 'border-transparent text-primary-500 hover:text-primary-700 hover:border-primary-300'
                }`}
              >
                Gallery
              </Link>
              <Link 
                href="/about" 
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  pathname === '/about'
                    ? 'border-accent text-primary-900'
                    : 'border-transparent text-primary-500 hover:text-primary-700 hover:border-primary-300'
                }`}
              >
                About
              </Link>
              <Link 
                href="/shop" 
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  pathname === '/shop'
                    ? 'border-accent text-primary-900'
                    : 'border-transparent text-primary-500 hover:text-primary-700 hover:border-primary-300'
                }`}
              >
                Shop
              </Link>
              <Link 
                href="/contact" 
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  pathname === '/contact'
                    ? 'border-accent text-primary-900'
                    : 'border-transparent text-primary-500 hover:text-primary-700 hover:border-primary-300'
                }`}
              >
                Contact
              </Link>
            </nav>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <Link href="/cart" className="p-2 text-primary-500 hover:text-primary-700">
              <span className="sr-only">Cart</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </Link>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-primary-500 hover:text-primary-700 hover:bg-primary-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-accent"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <Link 
              href="/" 
              className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
                pathname === '/'
                  ? 'border-accent text-primary-900 bg-primary-50'
                  : 'border-transparent text-primary-500 hover:text-primary-700 hover:bg-primary-50 hover:border-primary-300'
              }`}
            >
              Gallery
            </Link>
            <Link 
              href="/about" 
              className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
                pathname === '/about'
                  ? 'border-accent text-primary-900 bg-primary-50'
                  : 'border-transparent text-primary-500 hover:text-primary-700 hover:bg-primary-50 hover:border-primary-300'
              }`}
            >
              About
            </Link>
            <Link 
              href="/shop" 
              className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
                pathname === '/shop'
                  ? 'border-accent text-primary-900 bg-primary-50'
                  : 'border-transparent text-primary-500 hover:text-primary-700 hover:bg-primary-50 hover:border-primary-300'
              }`}
            >
              Shop
            </Link>
            <Link 
              href="/contact" 
              className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
                pathname === '/contact'
                  ? 'border-accent text-primary-900 bg-primary-50'
                  : 'border-transparent text-primary-500 hover:text-primary-700 hover:bg-primary-50 hover:border-primary-300'
              }`}
            >
              Contact
            </Link>
            <Link href="/cart" className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-primary-500 hover:text-primary-700 hover:bg-primary-50 hover:border-primary-300">
              Cart
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};