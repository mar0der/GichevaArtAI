'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { tailwindClasses as tc, cn } from '@/lib/utils/tailwind-classes';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  // Only run client-side
  useEffect(() => {
    setMounted(true);
  }, []);

  // If not mounted yet (server render), use a simpler version with fewer interactive elements
  if (!mounted) {
    return (
      <header className="bg-white shadow-sm">
        <div className={tc.container}>
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <span className="font-serif text-2xl font-bold text-primary-900">Gicheva Art</span>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="bg-white shadow-sm">
      <div className={tc.container}>
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
                className={cn(
                  tc.navLink,
                  pathname === '/' ? tc.navLinkActive : tc.navLinkInactive
                )}
              >
                Gallery
              </Link>
              <Link 
                href="/about" 
                className={cn(
                  tc.navLink,
                  pathname === '/about' ? tc.navLinkActive : tc.navLinkInactive
                )}
              >
                About
              </Link>
              <Link 
                href="/social-media"
                className={cn(
                  tc.navLink,
                  pathname === '/social-media' ? tc.navLinkActive : tc.navLinkInactive
                )}
              >
                Social Media
              </Link>
              <Link 
                href="/shop"
                className={cn(
                  tc.navLink,
                  pathname === '/shop' ? tc.navLinkActive : tc.navLinkInactive
                )}
              >
                Shop
              </Link>
              <Link 
                href="/contact"
                className={cn(
                  tc.navLink,
                  pathname === '/contact' ? tc.navLinkActive : tc.navLinkInactive
                )}
              >
                Contact
              </Link>
            </nav>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-primary-400 hover:text-primary-500 hover:bg-primary-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <Link 
              href="/" 
              className={cn(
                tc.mobileNavLink,
                pathname === '/' ? tc.mobileNavLinkActive : tc.mobileNavLinkInactive
              )}
            >
              Gallery
            </Link>
            <Link 
              href="/about" 
              className={cn(
                tc.mobileNavLink,
                pathname === '/about' ? tc.mobileNavLinkActive : tc.mobileNavLinkInactive
              )}
            >
              About
            </Link>
            <Link 
              href="/social-media" 
              className={cn(
                tc.mobileNavLink,
                pathname === '/social-media' ? tc.mobileNavLinkActive : tc.mobileNavLinkInactive
              )}
            >
              Social Media
            </Link>
            <Link 
              href="/shop" 
              className={cn(
                tc.mobileNavLink,
                pathname === '/shop' ? tc.mobileNavLinkActive : tc.mobileNavLinkInactive
              )}
            >
              Shop
            </Link>
            <Link 
              href="/contact" 
              className={cn(
                tc.mobileNavLink,
                pathname === '/contact' ? tc.mobileNavLinkActive : tc.mobileNavLinkInactive
              )}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}; 